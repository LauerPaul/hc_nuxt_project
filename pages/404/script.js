/**
*   @version 1.0 beta
*   @module @/pages/404
*   @desc <strong>404 - Page not found</strong>
*   @see ~/pages/404.vue
*
*   @author Pavel Lauer (front-end developer lauer.agency)
*   @copyright 2018©hearts-club.com
*/

export default {
	async fetch({error}) {
		return	error({statusCode: 404, message: "Page Not Found"})
	}
}