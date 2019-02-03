/**
* @module @/middleware/profile_page
* @see ~/middleware/profile_page.js
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
const getUser = async ({ app, store, params, redirect }) => {
	let id = params.user.match(/id_([0-9]+)/)
	let data = { id: null, url: '', router: true}
	
	if (id && id[1]) data.id = id[1]
	else data.url = params.user
	
	let res = await services.getProfile(data, app.$cookies.get('auth._token.local'))

	console.log('>>>>> Profile Page Middleware init', data, res.data, res.status);

	if (res.status == 200 && !res.data.error && res.data.user) {
		store.dispatch('auth/setSelectUser', res.data.user, {root:true})
		if (res.data.user.url) return redirect(`/${res.data.user.url}`)
	} else {
		store.dispatch('auth/resetSelectUser', {root:true})
		return redirect('/404')
	}
}

export default async context => {
	if (context.isHMR || !context.params || !context.params.user) return
	let filter = await filterPath(context);
	
	if (filter) return getUser(context)
	else return
}
