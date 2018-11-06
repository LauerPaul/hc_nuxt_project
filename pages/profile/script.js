/**
* @module @/pages/profile
* @see ~/pages/profile.vue
*
* @version 1.0
* @desc <strong>Profile Page</strong>
*
* @author Pavel Uhrynovych (lauer.agency)
* @copyright 2018©hearts-club.com
*/
import services from '@/services/profileServices'
import scheme from '~/components/schemes/with_menu'
import leftColumn from '~/components/columns/left_column'
import boardUserProfile from '@/components/boards/user_profile'
import boardUserGallery from '@/components/boards/gallery'
import boardWidget_MatchOfTheDay from '@/components/boards/widgets/match_of_the_day'
import { mapState } from 'vuex'

const methods = {
}

export default {
	middleware: 'profilePage',

	computed: {
		...mapState('auth', ['selectUser'])
	},

	/**
	* Страница использует компоненты:
	* > [Scheme With Menu]{@link /components/schemes/with_menu/?id=componentsschemeswith_menu}<br>
	* > [Left column]{@link /components/columns/left_column/?id=componentscolumnsleft_column}<br>
	* > [board User profile]{@link /components/boards/user_profile/?id=componentsboardsuser_profile}<br>
	* > [board User gallery]{@link /components/boards/gallery/?id=componentsboardsgallery}<br>
	* > [board widget - Match of the day]{@link /components/boards/widgets/match_of_the_day/?id=componentsboardswidgetsmatch_of_the_day}<br>
	*/
	components: {
		scheme,
		'left-column': leftColumn,
		'board-user-profile': boardUserProfile,
		'board-user-gallery': boardUserGallery,
		'board-widget-match-of-the-day': boardWidget_MatchOfTheDay
	},
	
	created: () => { if (process.env.TIMEOUT_LOAD_LOG) console.time('CREATED_PROFILE_PAGE') },
	
	/**
	* @desc ▶ Hook reporting <strong style="color:red; font-size: 18px;">ⓘ</strong>
	* @event module:@/pages/profile~PAGE <strong>Profile</strong> mounted
	*/
	mounted: function(){
		this.$log.info('component \'@/pages/profile\' -> mounted');		
		if (process.env.TIMEOUT_LOAD_LOG) console.timeEnd('CREATED_PROFILE_PAGE')
			console.log(this.selectUser);
	},
	methods: methods
}