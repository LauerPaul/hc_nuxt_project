/**
* @module @/services/profilePage
* @see ~/services/profilePage/index.js
*
* @version 1.0
* @desc <strong>Profile Page middleware</strong>
*
* @author Pavel Uhrynovych (lauer.agency)
* @copyright 2018©hearts-club.com
*/

import services from '@/services/profileServices'
import filterPath from '@/middleware/filter_path'

/**
* Запрос данных пользователя - обращается к **Services Profile** [`getProfile`]{@link /services/profile_services/?id=getprofileaxios-user_url-⇒-promisse}
* @method getUser
**/
const getUser = async ({ app, store, $axios, params, error }) => {
	console.log('>>>>> Profile Page Middleware init');
	
	let res = await services.getProfile($axios, params.user)

	if (res && res !== 'NOT_FOUND') {
		store.dispatch('auth/setSelectUser', res, {root:true})
	} else {
		store.dispatch('auth/resetSelectUser', {root:true})
		redirect({statusCode: 404, message: 'Page not found'})
	}
}

export default async context => {
	if (context.isHMR || !context.params || !context.params.user) return
	let filter = await filterPath(context);
	
	if (filter) return getUser(context)
	else return
}
