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

const methods = {
}

import { mapState } from 'vuex'

export default {

	async asyncData ({ $axios, route }) {
		let res = await services.getProfile($axios, route.params.user);
			
		/**
		* @typedef {Object} Data
		*/	
		return {
			userData: res
		}
	},
	
	computed: {
	},

	/**
	* Компонент использует компоненты:
	*	> [Scheme With Menu]{@link module:'components/schemes/with_menu}
	*	> [Left column]{@link module:'components/columns/left_column}
	*	> [board User profile]{@link module:components/boards/user_profile}
	*	> [board User gallery]{@link module:components/boards/gallery}
	*	> [board widget - Match of the day]{@link module:components/boards/widgets/match_of_the_day}
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
	* @desc ▶ Hook reporting <br>
	* <strong style="color:red; font-size: 18px;">ⓘ</strong>
	* @event module:@/pages/profile~PAGE <strong>Profile</strong> mounted
	*/
	mounted: function(){
		// Log mounted hook
		this.$log.info('component \'@/pages/profile\' -> mounted');		
		// Вывод времени компиляции страницы
		if (process.env.TIMEOUT_LOAD_LOG) console.timeEnd('CREATED_PROFILE_PAGE')
	},
	methods: methods
}