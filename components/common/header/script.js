/**
* @module components/common/header
* @see @/components/common/header
*
* @version 1.0
* @desc Header
*
* @author Pavel Uhrynovych (lauer.agency)
* @copyright 2018©hearts-club.com
*/

import { mapState } from 'vuex'
import headerSearch from '@/components/common/header-search-line'

const data = {
	/**
	* @typedef {Object} Data
	* 	@property {boolean} search_status - статус видимости строки поиска
	*/
	search_status: true, 
}

const methods = {
}

export default {
	data: function() { return data },

	/**
	* @typedef {Object} Computed
	*	@property {string} src - Логотип сайта (из Store App)
	*	@property {string} alt - alt логотипа сайта (из Store App)
	*/
	computed: {
		...mapState('App', { 'logo': 'logo' }),
		src () { if (this.logo) return this.logo.src },
		alt () { if (this.logo) return this.logo.alt }
	},

	/**
	* @desc ▶ Hook reporting
	* <strong style="color:red; font-size: 18px;">ⓘ</strong> 
	* @event module:components/common/header~Compomemt <strong>Header</strong> mounted
	*/
	mounted: function(){
		// Log mounted hook
		this.$log.info('component \'header\' (@/components/common/header) -> mounted hook init');

	},
	
	/**
	* Компонент использует компоненты:
	* > [Header]{@link /components/common/header-search-line/?id=componentscommonheader-search-line}
	*/
	components: {
		'search-line': headerSearch
	},

	methods: methods,
}