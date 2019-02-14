/**
* @module @/pages/profile
* @see ~/pages/profile.vue
*
* @version 1.0
* @desc <strong>Profile Page</strong>
*
* @author Pavel Uhrynovych (lauer.agency)
* @copyright 2018©hearts-club.com
*/
import { mapState } from 'vuex'
import { getPageConfig } from '@/services/appServices'
import services from '@/services/profileServices'

import scheme from '~/components/schemes/with_menu'
import leftColumn from '~/components/columns/left_column'

import boardUserProfile from '@/components/boards/user_profile'
import boardUserGallery from '@/components/boards/gallery'
import boardWidget_MatchOfTheDay from '@/components/boards/widgets/match_of_the_day'
import boardAboutUser from '@/components/boards/about'
import boardUsrInfoTable from '@/components/boards/user_info_table'

const methods = {
	/**
	* Форматируем список параметров данных пользователя
	* @return {object}
	**/
	listFormater (listKey) {
		if (!this[listKey]) return false

		let arr = {}
		for (let item in this[listKey]) {
			let itemName = item.charAt(0).toUpperCase() + item.substr(1)
			let itemKey = listKey.charAt(0).toUpperCase() + listKey.substr(1)
			let name = `${itemKey}${itemName}List`

			if (item == 'weight' || item == 'height') arr[item] = this[listKey][item]
			else {
				if (this.params[name]) {
					// Если вложенный массив
					if (this[listKey][item].length > 1) {
						arr[item] = []
						for (let id_ of this[listKey][item]) {
							this.params[name].filter(el => {
								if (parseInt(el.id) === parseInt(id_)) arr[item].push(el['value_' + this.locale])
							})
						}
					}
					// Если одно значение
					else {
						this.params[name].filter(el => {
							if (parseInt(el.id) === parseInt(this[listKey][item])) arr[item] = el['value_' + this.locale]
						})
					}
				}
			}
		}
		return arr
	}
}

export default {
	middleware: 'profile_page',
	name: 'profile',

	/**
	* > Загрузка галлери пользователя
	* 
	* @param  {object} contex
	* @sync *true*
	*/
	async asyncData({store, $axios}){
		let config = store.state.App.pageConfig
		let user = store.state.auth.selectUser
		let response = {}
		let gallery = config && config.status.gallery && user ? true : false

		if(user) response = await services.getProfile_secondData(user.id, gallery)

		/**
		* @typedef {object} Data
		*	@prop {object} gallery - Объект галлери пользователя
		*	@prop {string} about_text - текст "Обо мне"
		*	@prop {object} socium - текст "Обо мне"
		*	    @prop {string} socium.family_status - семейное положение
		*	    @prop {string} socium.children - наличие детей
		*	    @prop {string} socium.labor - сфера труда
		*	@prop {object} physique - физические данные пользователя
		*	    @prop {string} physique.physique_type - тип телосложения
		*	    @prop {number} physique.height - рост
		*	    @prop {number} physique.weight - вес
		*	    @prop {string} physique.race - раса
		*	    @prop {string} physique.hair_color - цвет волос
		*	    @prop {string} physique.eye_color - цвет глаз
		*	@prop {object} life_style - данные пользователя о стиле жизни
		*	    @prop {string} life_style.sleep - сон
		*	    @prop {string} life_style.sport - спорт
		*	    @prop {string} life_style.character - характер
		*	    @prop {string} life_style.attitude_to_alcohol - отношение к алкоголю
		*	    @prop {string} life_style.attitude_towards_smoking - отношение к курению
		*	@prop {object} intimacy - данные пользователя о интимных предпочтениях
		*	    @prop {string} intimacy.orientation - ориентация
		*	    @prop {string} intimacy.type - типаж
		*	    @prop {string} intimacy.safe_sex - безопасный секс
		*	    @prop {string} intimacy.favorite_position - любимая поза
		*/
		return response
	},
	// data: function(){ return data },
	computed: {
		...mapState('App', ['pageConfig', 'locale']),
		...mapState('auth', ['selectUser', 'params']),
		status () { if (this.pageConfig) return this.pageConfig.status; else return false },
		sociumList () {
			if (!this.socium) return false
			let data = this.listFormater('socium')
			return data
		},
		physiqueList () {
			if (!this.socium) return false
			let data = this.listFormater('physique')
			return data
		},
		lifeStyleList () {
			if (!this.socium) return false
			let data = this.listFormater('lifeStyle')
			return data
		},
		intimacyList () {
			if (!this.socium) return false
			let data = this.listFormater('intimacy')
			return data
		}
	},

	/**
	* Страница использует компоненты:
	* > [Scheme With Menu]{@link /components/schemes/with_menu/?id=componentsschemeswith_menu}<br>
	* > [Left column]{@link /components/columns/left_column/?id=componentscolumnsleft_column}<br>
	* > [board User profile]{@link /components/boards/user_profile/?id=componentsboardsuser_profile}<br>
	* > [board User gallery]{@link /components/boards/gallery/?id=componentsboardsgallery}<br>
	* > [board widget - Match of the day]{@link /components/boards/widgets/match_of_the_day/?id=componentsboardswidgetsmatch_of_the_day}<br>
	* > [board About User]{@link /components/boards/about/?id=componentsboardsabout}<br>
	* > [board User Info Table]{@link /components/boards/user_info_table/}<br>
	*/
	components: {
		scheme,
		'left-column': leftColumn,
		'board-user-profile': boardUserProfile,
		'board-user-gallery': boardUserGallery,
		'board-widget-match-of-the-day': boardWidget_MatchOfTheDay,
		'board-user-about': boardAboutUser,
		'board-user-info-table': boardUsrInfoTable
	},
	
	created: () => { if (process.env.TIMEOUT_LOAD_LOG) console.time('CREATED_PROFILE_PAGE') },
	
	/**
	* @desc ▶ Hook reporting <strong style="color:red; font-size: 18px;">ⓘ</strong>
	* @event module:@/pages/profile~PAGE <strong>Profile</strong> mounted
	*/
	mounted: function(){
		this.$log.info('component \'@/pages/profile\' -> mounted');		
		if (process.env.TIMEOUT_LOAD_LOG) console.timeEnd('CREATED_PROFILE_PAGE')
		console.log(this.selectUser);
	},

	methods: methods
}