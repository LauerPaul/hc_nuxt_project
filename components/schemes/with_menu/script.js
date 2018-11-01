/**
*   @version 1.0 beta
*   @module @/components/schemes/with_menu
*   @desc <strong>User Page</strong> - страница профиля текущего пользователя
*   @see ~/components/schemes/with_menu
*
*   @author Pavel Lauer (front-end developer lauer.agency)
*   @copyright 2018©hearts-club.com
*/
import { mapState } from 'vuex'

import leftColumn from '~/components/columns/left_column'
import rightColumn from '~/components/columns/right_column'
import siteMenu from '~/components/common/site-menu'

export default {
	/**
	* @typedef {Object} Computed
	*	@property {object} menuStatus - Статус видимости списка меню (из Store App)
	*/
	computed: {
		...mapState('App', { 'config': 'config' }),
		menuStatus () { if (this.config) return this.config.layout_default.left_column.menuStatus }
	},

	/**
	* This component requires the components:<br>
	*	> [Left column]{@link module:'components/columns/left_column}
	*	> [Right column]{@link module:'components/columns/right_column}
	* 	> [Site menu]{@link module:components/common/site-menu}
	*/
	components: {
		'left-column': leftColumn,
		'right-column': rightColumn,
		'site-menu': siteMenu
	},

	/**
	* @desc ▶ Hook reporting <br>
	* <strong style="color:red; font-size: 18px;">ⓘ</strong>
	* @event module:@/components/common/schemes/with_menu~COMPONENT <strong>Scheme With Menu</strong> mounted
	*/
	mounted: function(){
		// Log mounted hook
		this.$log.info('component \'@/components/common/schemes/with_menu\' -> mounted');		
	}
}