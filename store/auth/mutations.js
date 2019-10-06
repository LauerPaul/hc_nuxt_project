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
	},

	/**
	* Назначение переменной params
	* @param data {object} объект параметров страницы пользователя
	* @method SET_USER_PROFILE_PARAMS
	**/
	SET_USER_PROFILE_PARAMS (state, data) {
		console.log('SET_USER_PROFILE_PARAMS');
		if (data) state.params = data
	}
}