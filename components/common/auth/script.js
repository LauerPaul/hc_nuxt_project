/**
* @module @/components/common/auth
* @see ~/components/common/auth
*
* @version 1.0
* @desc Auth Component
*
* @author Pavel Uhrynovych (lauer.agency)
* @copyright 2018©hearts-club.com
*/

import querystring from 'querystring'

const data = {
	/**
	* @typedef {Object} Data
	* 	@property {string} username - reserved
	* 	@property {string} password - reserved
	* 	@property {string|null} error - reserved
	*/
	username: '',
	password: '',
	error: null,
	rememberMe: false,
	passShow: false
}

const methods = {
	async login() {
		/**
		*	@ignore
		*   @desc Auth - request
		* 	@method login
		* 	@async
		*/
		this.error = null

		let result = await this.$auth.loginWith('local', {
			data: {
				login: this.username,
				password: this.password,
				remember_me: this.rememberMe ? 1 : 0
			}
		})
			.then((res) => console.log('Logged In!', res))
			.catch(e => { this.error = e + '' })
	}
}

export default {
	data: function(){ return data },

	/**
	* @typedef {Object} computed
	* 	@property {string} redirect - redirect params
	*/
	computed: {
		redirect () { return (this.$route.query.redirect && decodeURIComponent(this.$route.query.redirect)) },
		isCallback () { return Boolean(this.$route.query.callback) }
	},

	/**
	* @desc ▶ Hook reporting <strong style="color:red; font-size: 18px;">ⓘ</strong>
	* @event module:@/components/common/auth~COMPONENT <strong>Auth</strong> mounted
	*/
	mounted: function(){
		this.$log.info('component \'@/components/common/auth\' -> mounted');
	},

	methods: methods
}