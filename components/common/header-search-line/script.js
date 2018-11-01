/**
* @vuedoc
* @module components/common/header-search-line
* @see @/components/common/header-search-line
*
* @version 1.0
* @desc Header search
*
* @author Pavel Uhrynovych (lauer.agency)
* @copyright 2018©hearts-club.com
*/

import iconFilter from '@/components/icons/filters'

const data = {
	/**
	* @typedef {Object} Data
	* 	@property {string} placeholder - placeholder строки поиска
	*/
	placeholder: 'Поиск',
}

const methods = {
}

/** Export component */
export default {
	// Set data
	data: function() { return data },

	/**
	* @desc ▶ Hook reporting
	* <strong style="color:red; font-size: 18px;">ⓘ</strong> 
	* @event module:components/common/header-search-line~Compomemt <strong>Header search line</strong> mounted
	*/
	mounted: function(){
		// Log mounted hook
		this.$log.info('layout \'default\' (@/components/common/header-search-line) -> mounted hook init');

	},
	/**
	* This layout requires the components: 
	*
	*/
	components: {
		'icon-filters': iconFilter,
	},

	// Methods
	methods: methods,
}