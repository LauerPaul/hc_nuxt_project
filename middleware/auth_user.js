/**
* @module @/middleware/auth_user
* @see ~/middleware/auth_user.js
*
* @version 1.0
* @desc <strong>User Auth middleware</strong>
*
* @author Pavel Uhrynovych (lauer.agency)
* @copyright 2018©hearts-club.com
*/

import filterPath from '@/middleware/filter_path'

/**
* @method redirectMethod
**/
const redirectMethod = async ({ app, store, params, redirect }) => {
	let link = store.state.auth.user.url ? store.state.auth.user.url : `id_${store.state.auth.user.id}`

	console.log('>>>>> Auth User Middleware init')

	if (link) return redirect(`/${link}`)
}

export default async context => {
	if (context.isHMR || !context.store.state.auth.loggedIn) return
	let filter = await filterPath(context);

	if (filter) return redirectMethod(context)
	else return
}
