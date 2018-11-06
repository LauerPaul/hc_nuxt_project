/**
*   @version 1.0 beta
*   @module store/auth
*   @desc <strong>Store auth</strong> - хранилище данных пользователя
*   @see ~/store/auth
*
*   @author Pavel Lauer (front-end developer lauer.agency)
*   @copyright 2018©hearts-club.com
*/

import state from "./state"
import mutations from "./mutations"
import actions from "./actions"
import getters from "./getters"

const authStore = {
	namespaced: true,
	state,
	getters,
	mutations,
	actions
}

export default authStore