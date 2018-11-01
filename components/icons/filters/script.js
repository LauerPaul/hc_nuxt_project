/**
* @vuedoc
* @module components/icons/filters
* @see @/components/icons/filters
*
* @version 1.0
* @desc Icon filters
*
* @author Pavel Uhrynovych (lauer.agency)
* @copyright 2018©hearts-club.com
*/


const data = {
	/**
	* @typedef {Object} Data
	* 	@property {string} placeholder - placeholder строки поиска
	*/
	line_1: { x1: "2.75", y1: "7", x2: "2.75", y2: "15" },
	line_2: { x1: "2.75", x2: "2.75", y2: "3" },
	line_3: { x1: "14.75", y1: "7", x2: "14.75", y2: "15" },
	line_4: { x1: "14.75", x2: "14.75", y2: "3" },
	line_5: { x1: "8.75", y1: "8", x2: "8.75" },
	line_6: { x1: "8.75", y1: "15", x2: "8.75", y2: "12" },

	circle_1: { cx: "2.5", cy: "4.5", r: "1.75" },
	circle_2: { cx: "14.5", cy: "4.5", r: "1.75" },
	circle_3: { cx: "8.5", cy: "9.5", r: "1.75" },
}

const methods = {
	hover (){
		this.line_1.y1 = 12
		this.circle_1.cy = 9.5
		this.line_2.y2 = 7

		this.line_4.y2 = 5
		this.circle_2.cy = 7.5
		this.line_3.y1 = 10

		this.line_5.y1 = 1
		this.circle_3.cy = 2.5
		this.line_6.y2 = 5
	},
	reset (){
		this.line_1.y1 = 7
		this.circle_1.cy = 4.5
		this.line_2.y2 = 3

		this.line_4.y2 = 3
		this.circle_2.cy = 4.5
		this.line_3.y1 = 7

		this.line_5.y1 = 8
		this.circle_3.cy = 9.5
		this.line_6.y2 = 12
	}
}

/** Export component */
export default {
	// Set data
	data: function() { return data },

	/**
	* @desc ▶ Hook reporting
	* <strong style="color:red; font-size: 18px;">ⓘ</strong> 
	* @event module:components/icons/filters~Compomemt <strong>Header search line</strong> mounted
	*/
	mounted: function(){
		// Log mounted hook
		this.$log.info('icon \'filters\' (@/components/icons/filters) -> mounted hook init');
	},

	// Methods
	methods: methods,
}