/**
* @module components/boards/user_profile
* @see @/components/boards/user_profile
*
* @version 1.0
* @desc User profile
*
* @author Pavel Uhrynovych (lauer.agency)
* @copyright 2018©hearts-club.com
*/

import { mapState, mapGetters } from 'vuex'
import noteBtn from '@/components/profile/actions/note'
import btn_circle from '@/components/elements/buttons/btn_circle'

const data = () => {
	/**
	* @typedef {Object} data
	*	@prop {bolean} show_diamon_popup - статус видимости информационного popup-окна о **premium** статусе
	*/
	return {
		show_diamon_popup: false
	}
}

const methods = {
}

export default {
	data: data,

	/**
	* @namespace
	*/
	computed: {
		...mapState('App', {
			lang: 'locale'
		}),
		...mapGetters('auth', ['userId']),

		/**
		* Ссылка на аватар пользователя
		* @return {string}
		*/
		avatar () {
			if (this.user && this.user.avatar) return require(`@/assets/images/tmp/${this.user.avatar}`)
			else return ''
		},
		/**
		* Полное имя пользователя
		* @return {string}
		*/
		fullName () {
			if (this.user && this.user[`fullName_${this.lang}`]) return this.user[`fullName_${this.lang}`]
			else return ''
		}, 
		/**
		* Локации пользователя
		* @return {string}
		*/
		locale () {
			let result = ''
			if (this.user) {
				if (this.user.country) result = this.user.country
				if (this.user.city) result += result ? ', ' + this.user.city : this.user.city
			}
			return result
		}
	},

	/**
	* Компонент ожидает **props** `:user` - объект данных пользователя
	* @typedef {Object} Props
	*	@prop {object} user - объект данных пользователя
	*	  @prop {object} user.id - id пользователя
	*	  @prop {object} user.url - url страницы пользователя
	*	  @prop {object} user.status_text - Текстовый статус страницы пользователя
	*	  @prop {string} user.fullName_ru - полное имя пользователя кириллицей (если не заполнено - заполняется латиницей)
	*	  @prop {string} user.fullName_en - полное имя пользователя латиницей
	*	  @prop {object} user.avatar - ссылка на avatar пользователя
	*	  @prop {string} user.deviceType - тип оборудования, с которого пользователь пользуется ресурсом на данный момент (**Допустимые значения**: `mobile`, `computer`, `tablet`)
	*	  @prop {number} user.age - возраст пользователя
	*	  @prop {string} user.zodiac - знак зодиака пользователя
	*	  @prop {string} user.country - страна пользователя
	*	  @prop {string} user.city - город пользователя
	*	  @prop {array} user.lookingFor - массив `id`, кого ищет пользователь
	*	  @prop {array} user.purposes - массив `id` целей знакомства на сайте
    *     @prop {boolean} user.isPremium - находится ли профиль в статусе "premium"
	*/
	props: [
		'user'
	],

	mounted: function(){
		this.$log.info('component \'Board User profile\' (@/components/boards/user_profile) -> mounted hook init')
	},

	components: {
		btn_circle,
		noteBtn
	},

	methods: methods
}