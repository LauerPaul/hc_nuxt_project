/**
*   @version 1.0 beta
*   @module @/components/schemes/with_menu
*   @desc <strong>Scheme With Menu</strong>
*   @see ~/components/schemes/with_menu
*
*   @author Pavel Lauer (front-end developer lauer.agency)
*   @copyright 2018©hearts-club.com
*/
import leftColumn from '~/components/columns/left_column'
import rightColumn from '~/components/columns/right_column'
import siteMenu from '~/components/common/site-menu'

export default {
	/**
	* This component requires the components:<br>
	* > [Left column]{@link module:'components/columns/left_column}
	* > [Right column]{@link module:'components/columns/right_column}
	* > [Site menu]{@link module:components/common/site-menu}
	*/
	components: {
		'left-column': leftColumn,
		'right-column': rightColumn,
		'site-menu': siteMenu
	},

	/**
	* @desc ▶ Hook reporting <br>
	* <strong style="color:red; font-size: 18px;">ⓘ</strong>
	* @event module:@/components/schemes/with_menu~COMPONENT <strong>Scheme With Menu</strong> mounted
	*/
	mounted: function(){
		// Log mounted hook
		this.$log.info('component \'@/components/schemes/with_menu\' -> mounted');		
	}
}