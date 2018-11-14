import filterPath from '@/middleware/filter_path'
import excludeList from '@/config/middleware/page_config/exclude_list'

// { isHMR, app, store, route, params, error, redirect }
const getPageConfig = async ({ store, $axios, route }) => {
	var exclude = false

	if (!route.name) return store.dispatch('app/resetPageConfig', {root:true})
	excludeList.filter(item => { if (item == route.name) exclude = true})
	if (exclude) return store.dispatch('App/resetPageConfig', {root:true})

	console.log('>>>>> Page Config Middleware init')
	return store.dispatch('App/setPageConfig', route.name, {root:true})
}

export default async context => {
	if (context.isHMR) return
	let filter = await filterPath(context)

	if (filter) return getPageConfig(context) 
	else return
}
