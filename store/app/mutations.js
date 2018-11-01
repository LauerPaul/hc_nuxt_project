/**
*   @version 1.0 beta
*   @module store/app/mutations
*   @desc <strong>[Store App]{@link module:store/app} Mutations</strong>
*   @see ~/store/app/mutations.js
*
*   @author Pavel Lauer (front-end developer lauer.agency)
*   @copyright 2018©hearts-club.com
*/
export default {
	/**
	* 	@desc Назначение текущего языка
	*	@method SET_LANG
	**/
	SET_LANG(state, lang) { if (lang) state.locale = lang },

	/**
	* 	@desc Назначение переводов в переменную
	*	@method SET_MESSAGES
	**/
	SET_MESSAGES(state, obj) { if (obj) state.translation = obj },

	/**
	* 	@desc Назначение параметров слоев и страниц
	*	@method SET_CONFIG
	**/
	SET_CONFIG(state, obj) { if (obj) state.config = obj },

	/**
	* 	@desc Назначение списка меню
	*	@method SET_MENU
	**/
	SET_MENU(state, obj) { if (obj) state.menu = obj },

	/**
	* 	@desc Назначение параметров логотипа
	*	@method SET_LOGO
	**/
	SET_LOGO(state, obj) { if (obj) state.logo = obj }
}