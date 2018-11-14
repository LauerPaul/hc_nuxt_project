/**
*   @version 1.0 beta
*   @module @/components/board
*   @desc <strong>Board Component</strong>
*   @see ~/components/board
*
*   @author Pavel Lauer (front-end developer lauer.agency)
*   @copyright 2018©hearts-club.com
*/
export default {
	/**
	* @desc ▶ Hook reporting <strong style="color:red; font-size: 18px;">ⓘ</strong>
	* @event module:@/components/board~COMPONENT <strong>Board Component</strong> mounted
	*/
	mounted: function(){
		this.$log.info('component \'@/components/board\' -> mounted');		
	},
	/**
	* *Компонент принимает параметры:*
	* @typedef {Object} Props
	*	@prop {string} title - Заголовок
	*	@prop {string} selector - дополнительный CSS класс 
	*	@prop {bolean} load - происходит ли загрузка
	*
	* @example board(selector="special_class", title="Галерея")
	* @example board(:title="`false`")
	* @example board <br> template(name="title")
	*/
	props: ['title', 'selector', 'load']
}