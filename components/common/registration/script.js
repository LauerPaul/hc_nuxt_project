/**
* @module @/components/common/registration
* @see ~/components/common/registration
*
* @version 1.0
* @desc Registration Component
*
* @author Pavel Uhrynovych (lauer.agency)
* @copyright 2018©hearts-club.com
*/

const data = {
	/**
	* @typedef {Object} Data
	* 	@property {string} username - reserved
	* 	@property {string} password - reserved
	* 	@property {string|null} error - reserved
	*/
	email: '',
	name: '',
	password: '',
	c_password: '',
	passShow: false
}

const methods = {
	async regUser() {
		if(this.email && this.name && this.password && this.c_password){
			if(this.password !== this.c_password) return alert('Пароли не совпадают!')
				
			return this.$axios.post(`/api/registration/`, {
				email: this.email,
				name: this.name,
				password: this.password,
				c_password: this.c_password
			})
			.catch(e => { console.log(e); })
			.then(response => {
				alert('Успешно зарегистрирован!')
			})

		} else return alert('Заполните все поля!')
	}
}

export default {
	data: function(){ return data },

	/**
	* @typedef {Object} computed
	* 	@property {string} redirect - redirect params
	*/
	computed: {
	},

	/**
	* @desc ▶ Hook reporting <strong style="color:red; font-size: 18px;">ⓘ</strong>
	* @event module:@/components/common/registration~COMPONENT <strong>Registration</strong> mounted
	*/
	mounted: function(){
		this.$log.info('component \'@/components/common/registration\' -> mounted');
	},

	methods: methods
}