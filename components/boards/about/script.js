/**
* @module components/boards/about
* @see @/components/boards/about
*
* @version 1.0
* @desc Board About
*
* @author Pavel Uhrynovych (lauer.agency)
* @copyright 2018©hearts-club.com
*/
import board from '@/components/board'

const data = {
	/**
	* @typedef {Object} Data
	*	 @prop {boolean} load - статус загрузки компонента
	*/
	load: false
}

const methods = {
}

export default {
	data: function() { return data },

	/**
	* @typedef {object} Props
	*	 @prop {string} text - текст для отображения
	*/
	props: ['text'],

	/**
	* @desc ▶ Hook reporting <strong style="color:red; font-size: 18px;">ⓘ</strong> 
	* @event module:components/boards/about~Compomemt <strong>Board About</strong> mounted
	*/
	mounted: function(){
		this.$log.info('component \'Board About\' (@/components/boards/about) -> mounted hook init');
	},

	/**
	* Компонент использует компоненты:
	* > [Board]{@link /components/board/}
	*/
	components: {
		board
	},

	methods: methods
}