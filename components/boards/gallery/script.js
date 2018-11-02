/**
* @module components/boards/gallery
* @see @/components/boards/gallery
*
* @version 1.0
* @desc Board gallery profile
*
* @author Pavel Uhrynovych (lauer.agency)
* @copyright 2018©hearts-club.com
*/

const data = {
	/**
	* @typedef {Object} Data
	*/
}

const methods = {
}

export default {
	data: function() { return data },

	/**
	* @desc ▶ Hook reporting <strong style="color:red; font-size: 18px;">ⓘ</strong> 
	* @event module:components/boards/gallery~Compomemt <strong>Board Gallery</strong> mounted
	*/
	mounted: function(){
		this.$log.info('component \'Board Gallery\' (@/components/boards/gallery) -> mounted hook init');
	},

	/**
	* Компонент использует компоненты:
	*/
	components: {
	},

	methods: methods,
}