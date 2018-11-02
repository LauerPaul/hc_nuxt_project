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

const data = {
	/**
	* @typedef {Object} Data
	*	@property {bolean} show_diamon_popup - статус отображения всплывающего окна (инфо о статусе премиум)
	*/
	show_diamon_popup: false
}

const methods = {
}

export default {
	data: function() { return data },

	/**
	* @typedef {Object} Computed
	*	@property {object} avatar - ссылка на avatar пользователя (из Store auth)
	*	@property {object} fullName - полное имя пользователя (из Store auth)
	*	@property {object} deviceType - тип оборудования, с которого пользователь пользуется ресурсом на данный момент (mobil|computer|tablet) (из Store auth)
	*	@property {object} age - возраст пользователя (из Store auth)
	*	@property {object} zodiac - знак зодиака пользователя (из Store auth)
	*	@property {object} country - страна пользователя (из Store auth)
	*	@property {object} city - город пользователя (из Store auth)
	*	@property {array} lookingFor - массив, кого ищет пользователь (из Store auth)
	*	@property {array} purposes -массив целей знакомства на сайте (из Store auth)
    *   @property {boolean} isPremium - находится ли профиль в статусе "premium" (из Store auth)
	*/
	computed: mapState('auth', [
    	'avatar',
    	'fullName',
    	'deviceType',
    	'age',
    	'zodiac',
    	'country',
    	'city',
    	'lookingFor',
    	'purposes',
    	'isPremium'
	]),

	/**
	* @desc ▶ Hook reporting
	* <strong style="color:red; font-size: 18px;">ⓘ</strong> 
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