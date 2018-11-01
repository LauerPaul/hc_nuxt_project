/**
*   @version 1.0 beta
*   @module @/components/common/auth
*   @desc <strong>About Page</strong>
*   @see ~/components/common/auth
*
*   @author Pavel Lauer (front-end developer lauer.agency)
*   @copyright 2018©hearts-club.com
*/

const data = {
	/**
	* @typedef {Object} Data
	* 	@property {string} username - reserved
	* 	@property {string} password - reserved
	* 	@property {string|null} error - reserved
	*/
	username: '',
	password: '123',
	error: null
}

const methods = {
	/**
	* Auth - request
	* @method login
	* @async
	*/
	async login() {
		this.error = null

		return this.$auth.loginWith('local', {
			data: {
				username: this.username,
				password: this.password
			}
		}).catch(e => { this.error = e + '' })
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
	* @desc ▶ Hook reporting <br>
	* <strong style="color:red; font-size: 18px;">ⓘ</strong>
	* @event module:@/components/common/auth~COMPONENT <strong>Auth</strong> mounted
	*/
	mounted: function(){
		// Log mounted hook
		this.$log.info('component \'@/components/common/auth\' -> mounted');
	},
	methods: methods
}