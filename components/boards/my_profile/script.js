/**
* @module components/boards/my_profile
* @see @/components/boards/my_profile
*
* @version 1.0
* @desc My profile
*
* @author Pavel Uhrynovych (lauer.agency)
* @copyright 2018©hearts-club.com
*/

import { mapState, mapGetters } from 'vuex'
import board from '@/components/board'
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
		...mapState('auth', ['params', 'user']),
		
		/**
		* Полное имя пользователя
		* @return {string}
		*/
		fullName () {
			if (!this.user && !this.user[`full_name_${this.lang}`]) return ''
			if (!this.user && this.user[`full_name_${this.lang}`]) return 'User ID' + this.user['id'] 
			return this.user[`full_name_${this.lang}`]
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
		},
		/**
		* Зодиак пользователя
		* @return {string}
		*/
		zodiacName () {
			let zodiac = ''
			if (this.params && this.params['ZodiacList'] && this.user.zodiac_id) {
				this.params['ZodiacList'].filter(item => {
					if (item.id === this.user.zodiac_id) zodiac = item[`value_${this.lang}`]
				})
			}
			return zodiac
		}
	},

	mounted: function(){
		this.$log.info('component \'Board My profile\' (@/components/boards/my_profile) -> mounted hook init')
		console.log(this.$store.state.auth);
	},

	/**
	* Компонент использует компоненты:
	* > [Board]{@link /components/board/}
	* > [Btn circle]{@link /components/elements/buttons/btn_circle/}
	*/
	components: {
		board,
		btn_circle
	},

	methods: methods
}