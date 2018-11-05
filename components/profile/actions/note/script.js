/**
*   @version 1.0 beta
*   @module @/components/profile/actions/note
*   @desc Кнопка добавления пользователя в избранное
*   @see ~/components/profile/actions/note
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
	*	@prop {string} noteText - текст заметки к профилю пользователя
	*/
	return {
		noteText: ''
	}
}

const methods = {
	/**
	* Запрос заметки к профилю (обращается к сервису **profileServices** [`getNote`]{@link /services/profile_services/?id=getnoteaxios-params-⇒-promisse})
	* @async **true**
	* @method getNote 
	**/
	async getNote () {
		this.$log.debug('component \'Board User profile\' (@/components/elements/buttons/btn_circle) -> getNote () - method init')
		
		let respounce = await services.getNote(this.$axios, { user: this.userId, user_2: this.id })
		this.noteText = respounce
		return this.noteText
	},

	/**
	* Запрос на запись заметки к профилю (обращается к сервису **profileServices** [`postNote`]{@link /services/profile_services/?id=postnoteaxios-params-⇒-promisse})
	* @async **true**
	* @method note 
	**/
	async saveNote () {
		this.$log.debug('component \'Board User profile\' (@/components/elements/buttons/btn_circle) -> saveNote() - method init')
		
		let params = { 
			user: this.userId,
			user_2: this.id,
			text: 'text'
		}

		let respounce = await services.postNote(this.$axios, params)
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
		this.$log.info('component \'@/components/profile/actions/note\' -> mounted');		
	},

	components: {
		btn_circle
	},

	/**
	* Компонент ожидает **props** `:id` - id профиля
	* @typedef {Object} Props
	*	@prop {number} id - id профиля
	*/
	props: [
		'id'
	],

	methods: methods
}