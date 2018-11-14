/**
* @module components/elements/table
* @see @/components/elements/table
*
* @version 1.0
* @desc Element Table
*
* @author Pavel Uhrynovych (lauer.agency)
* @copyright 2018©hearts-club.com
*/

export default {
	/**
	* @desc ▶ Hook reporting <strong style="color:red; font-size: 18px;">ⓘ</strong> 
	* @event module:components/elements/table~Compomemt <strong>Element Table</strong> mounted
	*/
	mounted: function(){
		this.$log.info('component \'Element Table\' (@/components/elements/table) -> mounted hook init');
	},

	/**
	* @typedef {object} Props
	*	 @prop {object} params - объекты для отображения в таблице
	*/
	props: ['params']
}