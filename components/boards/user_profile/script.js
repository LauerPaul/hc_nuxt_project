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
		...mapState('auth', ['selectUser']),
		...mapGetters('auth', ['userId']),

		/**
		* Ссылка на аватар пользователя
		* @return {string}
		*/
		avatar () {
			if (this.selectUser && this.selectUser.avatar) return require(`@/static/tmp/${this.selectUser.avatar}`)
			else return ''
		},
		/**
		* Полное имя пользователя
		* @return {string}
		*/
		fullName () {
			if (this.selectUser && this.selectUser[`fullName_${this.lang}`]) return this.selectUser[`fullName_${this.lang}`]
			else return ''
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