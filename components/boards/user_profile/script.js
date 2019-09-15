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
import board from '@/components/board'
import noteBtn from '@/components/profile/actions/note'
import favoriteBtn from '@/components/profile/actions/favorite'
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
		...mapState('App', {lang: 'locale'}),
		...mapState('auth', ['selectUser', 'params']),
		...mapGetters('auth', ['userId']),

		/**
		* Ссылка на аватар пользователя
		* @return {string}
		*/
		avatar () {
			if (this.selectUser && this.selectUser.avatar) return require(`@/static/tmp/${this.selectUser.avatar}`)
			else return 'http://www.veseloeradio.ru/vardata/modules/news/files/1/817/news_file_817_57bc04d0006b5.jpg'
		},


	
		/**
		* Полное имя пользователя
		* @return {string}
		*/
		fullName () {
			if (!this.selectUser || !this.selectUser[`full_name_${this.lang}`]) return 'User'
			return this.selectUser[`full_name_${this.lang}`]
		}, 
		/**
		* Локации пользователя
		* @return {string}
		*/
		locale () {
			let result = ''
			if (this.selectUser) {
				if (this.selectUser.country) result = this.selectUser.country
				if (this.selectUser.city) result += result ? ', ' + this.selectUser.city : this.selectUser.city
			}
			return result
		},
		/**
		* Зодиак пользователя
		* @return {string}
		*/
		zodiacName () {
			let zodiac = ''
			if (this.params && this.params['ZodiacList'] && this.selectUser.zodiac_id) {
				this.params['ZodiacList'].filter(item => {
					if (item.id === this.selectUser.zodiac_id) zodiac = item[`value_${this.lang}`]
				})
			}
			return zodiac
		}
	},

	mounted: function(){
		this.$log.info('component \'Board User profile\' (@/components/boards/user_profile) -> mounted hook init')
	},

	/**
	* Компонент использует компоненты:
	* > [Board]{@link /components/board/}
	* > [Btn circle]{@link /components/elements/buttons/btn_circle/}
	* > [Btn note]{@link /components/profile/actions/note/}
	* > [Btn favorite]{@link /components/profile/actions/favorite/}
	*/
	components: {
		board,
		btn_circle,
		noteBtn,
		favoriteBtn
	},

	methods: methods
}