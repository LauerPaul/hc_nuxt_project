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

import { mapState } from 'vuex'

const data = () => {
	return {
		show_diamon_popup: false
	}
}

const methods = {
}

export default {
	data: data,

	computed: {
		avatar () {
			if (this.user && this.user.avatar) return require(`@/assets/images/tmp/${this.user.avatar}`)
			else return ''
		},

		fullName () {
			if (this.user && this.user.fullName) return this.user.fullName
			else return ''
		}, 

		locale () {
			let result = ''
			if (this.user) {
				if (this.user.country) result = this.user.country
				if (this.user.city) result += this.user.city
			}
			return result
		}
	},

	/**
	* @typedef {Object} Props
	*	@property {object} user - объект данных пользователя
	*	  @property {object} user.avatar - ссылка на avatar пользователя
	*	  @property {object} user.fullName - полное имя пользователя
	*	  @property {object} user.deviceType - тип оборудования, с которого пользователь пользуется ресурсом на данный момент (mobil|computer|tablet)
	*	  @property {object} user.age - возраст пользователя
	*	  @property {object} user.zodiac - знак зодиака пользователя
	*	  @property {object} user.country - страна пользователя
	*	  @property {object} user.city - город пользователя
	*	  @property {array} user.lookingFor - массив, кого ищет пользователь
	*	  @property {array} user.purposes -массив целей знакомства на сайте
    *     @property {boolean} user.isPremium - находится ли профиль в статусе "premium"
	*/
	props: [
		'user'
	],

	/**
	* @desc ▶ Hook reporting <strong style="color:red; font-size: 18px;">ⓘ</strong> 
	* @event module:components/boards/user_profile~Compomemt <strong>Board User profile</strong> mounted
	*/
	mounted: function(){
		this.$log.info('component \'Board User profile\' (@/components/boards/user_profile) -> mounted hook init');
	},

	/**
	* Компонент использует компоненты:
	*/
	components: {
	},

	methods: methods,
}