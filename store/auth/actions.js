/**
*   @version 1.0 beta
*   @module store/auth/actions
*   @desc <strong>Store auth Actions</strong>
*   @see ~/store/auth/actions.js
*
*   @author Pavel Lauer (front-end developer lauer.agency)
*   @copyright 2018©hearts-club.com
*/
export default {
	/**
	* Назначение переменной selectUser - вызывыает **Store auth** [`SET_SELECT_USER`]{@link /store/auth/?id=set_select_userstate-data}
	* @param user_data {object} объект данных пользователя
	* @method setSelectUser
	**/
	setSelectUser ({ commit }, user_data) {
		commit('SET_SELECT_USER', user_data)
	},
	/**
	* Сброс переменной selectUser - вызывыает **Store auth** [`SET_SELECT_USER`]{@link /store/auth/?id=set_select_userstate-data}
	* @method resetSelectUser
	**/
	resetSelectUser ({ commit }) {
		commit('SET_SELECT_USER', null)
	},
	/**
	* Назначение переменной access.csrf - вызывыает **Store auth** [`SET_CSRF_ACCESS`]{@link /store/auth/?id=set_csrf_accessstate-data}
	* @method resetSelectUser
	**/
	csrfSet ({ commit }, scrf) {
		commit('SET_CSRF_ACCESS', scrf)
	}
}