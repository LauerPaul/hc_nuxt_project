/**
*   @version 1.0 beta
*   @module store/auth/mutations
*   @desc <strong>Store auth Mutations</strong>
*   @see ~/store/auth/mutations.js
*
*   @author Pavel Lauer (front-end developer lauer.agency)
*   @copyright 2018©hearts-club.com
*/
export default {
	/**
	* Назначение переменной selectUser
	* @param data {object} объект данных пользователя
	* @method SET_SELECT_USER
	**/
	SET_SELECT_USER (state, data) {
		if (data === null || data) state.selectUser = data
	}
}