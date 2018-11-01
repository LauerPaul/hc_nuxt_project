/**
*   @version 1.0 beta
*   @module store/app
*   @desc <strong>Store App</strong> - хранилище данных приложения
*   @see ~/store/app
*
*   @author Pavel Lauer (front-end developer lauer.agency)
*   @copyright 2018©hearts-club.com
*/

import state from "./state"
import mutations from "./mutations"
import actions from "./actions"

const appStore = {
	namespaced: true,
	state,
	mutations,
	actions
}

export default appStore