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
import RegComponent from "@/components/common/registration"

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
	*/
	components: {
		'auth-component': AuthComponent,
		'reg-component': RegComponent
	},
	created: () => { if (process.env.TIMEOUT_LOAD_LOG) console.time('CREATED_HOME_PAGE'); },
	/**
	* @desc ▶ Hook reporting <br>
	* <strong style="color:red; font-size: 18px;">ⓘ</strong>
	* @event module:@/pages/index/home~PAGE <strong>Home</strong> mounted
	*/
	mounted: function(){
		this.$log.info('component \'@/pages/index/home\' -> mounted');		
		// Вывод времени компиляции страницы
		if (process.env.TIMEOUT_LOAD_LOG) console.timeEnd('CREATED_HOME_PAGE')
	},
	methods: methods
}