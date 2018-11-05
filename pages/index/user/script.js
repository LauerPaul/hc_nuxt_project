/**
*   @version 1.0 beta
*   @module @/pages/index/user
*   @desc <strong>User Page</strong> - страница профиля текущего пользователя
*   @see ~/pages/index/user
*
*   @author Pavel Lauer (front-end developer lauer.agency)
*   @copyright 2018©hearts-club.com
*/
import { mapState } from 'vuex'

import scheme from '~/components/schemes/with_menu'
import leftColumn from '~/components/columns/left_column'

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
	data: data,
	computed: {
	},
	/**
	* This page requires the components:<br>
	* > [Scheme With Menu]{@link /components/schemes/with_menu/?id=componentsschemeswith_menu}<br>
	* > [Left column]{@link /components/columns/left_column/?id=componentscolumnsleft_column}<br>
	*/
	components: {
		scheme,
		'left-column': leftColumn
	},
	created: () => { if (process.env.TIMEOUT_LOAD_LOG) console.time('CREATED_USER_PAGE') },
	/**
	* @desc ▶ Hook reporting <strong style="color:red; font-size: 18px;">ⓘ</strong>
	* @event module:@/pages/index/user~PAGE <strong>User</strong> mounted
	*/
	mounted: function(){
		this.$log.info('component \'@/pages/index/user\' -> mounted');		
		// Вывод времени компиляции страницы
		if (process.env.TIMEOUT_LOAD_LOG) console.timeEnd('CREATED_USER_PAGE')
	},
	methods: methods
}