/**
*   @version 1.0 beta
*   @module @/pages/index/home
*   @desc <strong>Home Page</strong> - для не авторизованных пользователей
*   @see ~/pages/index/home
*
*   @author Pavel Lauer (front-end developer lauer.agency)
*   @copyright 2018©hearts-club.com
*/
import { mapState } from 'vuex'
import AuthComponent from "@/components/common/auth"

const data = () => {
	return {
		/**
		* @typedef {Object} Data
		*/
	}
}

const methods = {
}

export default {
	name: 'HomePage',
	layout (context) {
		return 'default'
	},
	data: data,
	computed: {
	},
	/**
	* This page requires the components:<br>
	*
	*	> [Left column]{@link module:components/columns/left_column}
	*	> [Right column]{@link module:components/columns/right_column/profile}
	*/
	components: {
		'auth-component': AuthComponent
	},
	created: () => { if (process.env.TIMEOUT_LOAD_LOG) console.time('CREATED_HOME_PAGE'); },
	/**
	* @desc ▶ Hook reporting <br>
	* <strong style="color:red; font-size: 18px;">ⓘ</strong>
	* @event module:@/pages/index/home~PAGE <strong>Home</strong> mounted
	*/
	mounted: function(){
		// Log mounted hook
		this.$log.info('component \'@/pages/index/home\' -> mounted');		
		// Вывод времени компиляции страницы
		if (process.env.TIMEOUT_LOAD_LOG) console.timeEnd('CREATED_HOME_PAGE')
	},
	methods: methods
}