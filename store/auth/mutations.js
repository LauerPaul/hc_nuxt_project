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
	* Назначение переменной access.csrf
	* @param data {object} csrf
	* @method SET_CSRF_ACCESS
	**/
	SET_CSRF_ACCESS (state, data) {
		if (!data) return false
		let date = Math.floor(Date.now() / 1000)
		state.access.csrf = data
		state.access.csrf_date = date
	}
}