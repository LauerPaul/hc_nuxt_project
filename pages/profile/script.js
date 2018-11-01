/**
*   @version 1.0
*   @module @/pages/profile
*   @desc <strong>Profile Page</strong>
*   @see ~/pages/profile.vue
*
*   @author Pavel Lauer (front-end developer lauer.agency)
*   @copyright 2018©hearts-club.com
*/

import boardUserProfile from '@/components/boards/user_profile'
import boardUserGallery from '@/components/boards/gallery'
import boardWidget_MatchOfTheDay from '@/components/boards/widgets/match_of_the_day'

const data = () => {
	return {
		/**
		* @typedef {Object} Data
		*/
	}
}

const methods = {
}

import { mapState } from 'vuex'

/** Export component */
export default {
	layout: 'with_menu',
	data: data,
	computed: {
	},
	/**
	* Компонент использует компоненты:
	*
	*	> [board User profile]{@link module:components/boards/user_profile}
	*	> [board User gallery]{@link module:components/boards/gallery}
	*	> [board widget - Match of the day]{@link module:components/boards/widgets/match_of_the_day}
	*/
	components: {
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