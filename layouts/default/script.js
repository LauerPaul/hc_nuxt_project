/**
*	@version 1.0 beta
*	@module layouts/default
*	@desc <strong>Layout Default</strong>
*	@see @/layouts/default
*
*   @author Pavel Lauer (front-end developer lauer.agency)
*   @copyright 2018©hearts-club.com
*/

import { mapState } from 'vuex'
import header from '@/components/common/header'

export default  {
	head () {
		return {
			meta: [
				{ charset: 'utf-8' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' }
			],
			script: [
				{type: 'text/javascript', src: `https://socket.circe.store/socket.io/socket.io.js`}
			]
		}
	},

	computed: {
	},

	/**
	* Шаблон использует компоненты:
	*	> [Header]{@link module:components/common/header}
	*/
	components: {
		'module-header': header
	},

	created: () => {
		// Запускаем таймер, чтоб знать, за какое время шаблон будет смонтирован
		if (process.env.TIMEOUT_LOAD_LOG) console.time('Created_Default-layout')
	},

	/**
	* @desc ▶ Hook reporting
	* <strong style="color:red; font-size: 18px;">ⓘ</strong> 
	* @event module:layouts/default~LAYOUT <strong>Default</strong> mounted
	*/
	mounted: function(){
		// Log mounted hook
		this.$log.info('Layout \'Default\' (@/layouts/default) ->  mounted hook init');
		// Вывод времени компиляции шаблона
		if (process.env.TIMEOUT_LOAD_LOG) console.timeEnd('Created_Default-layout')
	}
}