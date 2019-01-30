/**
* @module @/middleware/csrf-token
* @see ~/middleware/csrf-token.js
*
* @version 1.0
* @desc <strong>CSRF token middleware</strong>
*
* @author Pavel Uhrynovych (lauer.agency)
* @copyright 2019©hearts-club.com
*/

import appServices from '@/services/appServices'
import CookieUniversalNuxt from 'cookie-universal-nuxt'

class Cookie {

	constructor(items) {
		if (!items) return false

		this.items = items
		this.result = null
	}

	parse () {
		if (!this.items) return
		console.log('test parse');

	 	// If items is array
	 	if (Array.isArray(this.items)) return this.parseCookieArray()
	 	// If item is string
	 	else {
	 		let result = this.parseCookieString(this.items)
	 		this.result = [result]

 			return this.result
	 	}

	}

	parseCookieArray () {
		this.result = []

 		this.items.filter((item) => {
			this.result.push(this.parseCookieString(item))
		})

		return this.result
	}

	parseCookieString (item = false) {
		if (typeof(item) == 'undefined' || !item) return false

		let items = item.split(';')
	 	let result = {}

	 	items.filter((elemen) => {
			let cash = elemen.replace(/^\s+/g, '').split('=')
			result[cash[0]] = cash[1] ? cash[1] : ''
		})

		return result
	}

	setCookie (items = false) {
		let items_ = items ? items : this.result
		if (!Array.isArray(items_)) return false

		CookieUniversalNuxt.set('test', '1231231')
		console.log('test save', items_);
	}
}

/**
* Запрос csrf токена для пользователя - обращается к **Services App** [`getCSRFtoken`]{@link /services/app_services/?id=getcsrftokenaxios-⇒-promisse}
* Устанавливает значение state.auth.access.csrf в store
* @method getCSRF
**/
const getCSRF = async ( store, app ) => {
   		if (process.env.NODE_ENV == 'development') console.log('>>>>> Get csrf-token <<<<')
		
		let req = await appServices.getCSRFtoken()
	    // store.dispatch('auth/csrfSet', req.csrf, {root:true})
	    
	    let _cookie = new Cookie(req.cookie)
	    _cookie.parse()
	    _cookie.setCookie()
	    
		console.log(_cookie);

	    // app.$cookies.set('XSRF-TOKEN', req.csrf)
}

export default ({store, app, isHMR}) => {
	if (isHMR) return

    if (process.env.NODE_ENV == 'development') console.log('>>>>> csrf-token init <<<<<<')
	
	// Если токен был ранее получен
	if (store.state.auth.access.csrf) {
		let time = store.state.auth.access.csrf_date + 3600
		let current_time = Math.floor(Date.now() / 1000)
		
		// Если токен просрочен - запрашиваем новый
		if (time < current_time) {
			if (process.env.NODE_ENV == 'development') console.log('>>>>> csrf-token: expired token <<<<<<')
			return getCSRF(store, app)
		}
	}
	// Если токен не был получен ранее - запрашиваем новый
	else { 
		if (process.env.NODE_ENV == 'development') console.log('>>>>> csrf-token: token not detected <<<<<<')
		return getCSRF(store, app)
	}
}
