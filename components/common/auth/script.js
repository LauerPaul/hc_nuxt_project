/**
* @module @/components/common/auth
* @see ~/components/common/auth
*
* @version 1.0
* @desc About Page
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
	username: '',
	password: '123',
	error: null
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
	* @desc ▶ Hook reporting <strong style="color:red; font-size: 18px;">ⓘ</strong>
	* @event module:@/components/common/auth~COMPONENT <strong>Auth</strong> mounted
	*/
	mounted: function(){
		this.$log.info('component \'@/components/common/auth\' -> mounted');
	},

	methods: methods
}