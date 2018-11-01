/**
*   @version 1.0 beta
*   @module store/app/actions
*   @desc <strong>[Store App]{@link module:store/app} Actions</strong>
*   @see ~/store/app/actions.js
*
*   @author Pavel Lauer (front-end developer lauer.agency)
*   @copyright 2018©hearts-club.com
*/
import service from "@/services/appServices"

export default {
	/**
	* 	@desc Загрузка переводов
	* 	> обращается к [appServices]{@link module:services/appServices}
	*	@method getMessages
	**/
	async getMessages ({ commit }, lang = process.env.DEFAUL_LANGUAGE) {
		const response = await service.getMessages(this.$axios, lang)
		commit('SET_MESSAGES', response)
	},

	/**
	* 	@desc Загрузка параметров слоев и страниц
	*	@method getConfig
	**/
	async getConfig ({ commit }) {
		const response = await service.getConfig(this.$axios)
		commit('SET_CONFIG', response.config)
		commit('SET_MENU', response.site_menu)
		commit('SET_LOGO', response.logo)
	}
}