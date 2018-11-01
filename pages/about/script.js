/**
*   @version 1.0 beta
*   @module @/pages/about
*   @desc <strong>About Page</strong>
*   @see ~/pages/about.vue
*
*   @author Pavel Lauer (front-end developer lauer.agency)
*   @copyright 2018©hearts-club.com
*/

const data = {
	/**
	* @typedef {Object} Data
	*/
}

const methods = {}

export default {
	data: function(){ return data },

	/**
	* This page requires the components:<br>
	*/
	components: {
	},

	created: () => {
		// Запускаем таймер, чтоб знать, за какое время страница будет смонтирована
		if (process.env.TIMEOUT_LOAD_LOG) console.time('CREATED_ABOUT_PAGE')
	},

	/**
	* @desc ▶ Hook reporting <br>
	* <strong style="color:red; font-size: 18px;">ⓘ</strong>
	* @event module:@/pages/about~PAGE <strong>About</strong> mounted
	*/
	mounted: function(){
		// Log mounted hook
		this.$log.info('component \'@/pages/about\' -> mounted');
		// Вывод времени компиляции страницы
		if (process.env.TIMEOUT_LOAD_LOG) console.timeEnd('CREATED_ABOUT_PAGE')
	},

	methods: methods
}