import excludeList from '@/config/middleware/exclude_files'

export default ({ params, route }) => {
	var status = true
	excludeList.filter(item => { if (route.path.indexOf(item) + 1) status = false })
	// if (params) for (let name of Object.values(params)) excludeList.filter(item => { if (name.indexOf(item) + 1) return false })
	return status
}