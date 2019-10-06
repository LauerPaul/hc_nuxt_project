/**
*   @version 1.0 beta
*   @module store/auth/actions
*   @desc <strong>Store auth Actions</strong>
*   @see ~/store/auth/actions.js
*
*   @author Pavel Lauer (front-end developer lauer.agency)
*   @copyright 2018©hearts-club.com
*/

import appServices from "@/services/appServices"
import timestamp from "~/libs/timestamp";

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
	* 	@desc Загрузка основных параметров профилей
	*	@method getParams
	**/
	async getParams ({ commit }) {
		const response = await appServices.getParams()
		
		let data = response.data
		
		if (data) {
			data.timestamp = timestamp.get()
			commit('SET_USER_PROFILE_PARAMS', data)
		} else return false
	}
}