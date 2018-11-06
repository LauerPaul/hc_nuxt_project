/**
*   @version 1.0 beta
*   @module @/components/profile/actions/favorite
*   @desc Кнопка добавления пользователя в избранное
*   @see ~/components/profile/actions/favorite
*
*   @author Pavel Lauer (front-end developer lauer.agency)
*   @copyright 2018©hearts-club.com
*/
import { mapGetters } from 'vuex'
import services from '@/services/profileServices'
import btn_circle from '@/components/elements/buttons/btn_circle'

const data = () => {
	/**
	* @typedef {Object} data
	*/
	return {
		isFavorite: false
	}
}

const methods = {
	/**
	* Запрос на запись заметки к профилю (обращается к сервису **profileServices** [`postNote`]{@link /services/profile_services/?id=postnoteaxios-params-⇒-promisse})
	* @async **true**
	* @method note 
	**/
	async setFavoriteStatus () {
		this.$log.debug('component \'Profile Action Btn - favorite\' (@/components/elements/buttons/btn_circle) -> saveNote() - method init')
		
		let params = { 
			user: this.userId,
			user_2: this.id,
			filters: []
		}

		let res = await services.postFavorite(this.$axios, params)
		this.isFavorite = res
	}
}


export default {
	data: data,

	/**
	* @namespace
	*/
	computed: {
		...mapGetters('auth', ['userId'])
	},

	mounted: function(){
		this.$log.info('component \'@/components/profile/actions/favorite\' -> mounted');
		this.isFavorite = this.status
	},

	components: {
		btn_circle
	},

	/**
	* @typedef {Object} Props
	*	@prop {number} id - id профиля
	*	@prop {boolean} status - статус (в избранном или нет)
	*/
	props: [
		'id', 'status'
	],

	methods: methods
}