/**
*   @version 1.0 beta
*   @module @/pages/index
*   @desc <strong>Index Page</strong>
*   @see ~/pages/index.vue
*
*   @author Pavel Lauer (front-end developer lauer.agency)
*   @copyright 2018©hearts-club.com
*/

import { mapState } from 'vuex'
import homePage from '~/pages/index/home'
import userPage from '~/pages/index/user'

/** Export component */
export default {
	name: 'IndexParent',
	computed: { isAuth () { return this.$store.state.auth.loggedIn } },
	/**
	* This page requires the components:<br>
	*	> [Home page]{@link module:pages/index/home}
	*	> [User page]{@link module:pages/index/user}
	*/
	components: {
		'home-page': homePage,
		'user-page': userPage
	},
	created: () => { if (process.env.TIMEOUT_LOAD_LOG) console.time('CREATED_INDEX_PAGE') },
	/**
	* @desc ▶ Hook reporting <br>
	* <strong style="color:red; font-size: 18px;">ⓘ</strong>
	* @event module:@/pages/index~PAGE <strong>Index</strong> mounted
	*/
	mounted: function(){
		// Log mounted hook
		this.$log.info('component \'@/pages/index\' -> mounted');		
		// Вывод времени компиляции страницы
		if (process.env.TIMEOUT_LOAD_LOG) console.timeEnd('CREATED_INDEX_PAGE')
	}
}