/**
* @module components/boards/widgets/match_of_the_day
* @see @/components/boards/widgets/match_of_the_day
*
* @version 1.0
* @desc Board widget Match of the day
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
	* @event module:components/boards/widgets/match_of_the_day~Compomemt <strong>Board widget - Match of the day</strong> mounted
	*/
	mounted: function(){
		this.$log.info('component \'Board widget - Match of the day\' (@/components/boards/widgets/match_of_the_day) -> mounted hook init');
	},

	/**
	* Компонент использует компоненты:
	*
	*/
	components: {
	},

	methods: methods
}