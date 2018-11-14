/**
*   @version 1.0 beta
*   @module store/app/actions
*   @desc <strong>[Store App]{@link module:store/app} Actions</strong>
*   @see ~/store/app/actions.js
*
*   @author Pavel Lauer (front-end developer lauer.agency)
*   @copyright 2018©hearts-club.com
*/
import services from "@/services/appServices"

export default {
	/**
	* 	@desc Загрузка переводов
	* 	> обращается к [appServices]{@link module:services/appServices}
	*	@method getLocales
	**/
	async getLocales ({ commit }, lang = process.env.DEFAUL_LANGUAGE) {
		const response = await services.getLocales(this.$axios, lang)
		commit('SET_LOCALES', response)
	},

	/**
	* 	@desc Загрузка основных параметров приложения
	*	@method getConfig
	**/
	async getConfig ({ commit }) {
		const response = await services.getConfig(this.$axios)
		commit('SET_CONFIG', response.config)
		commit('SET_MENU', response.site_menu)
		commit('SET_LOGO', response.logo)
	},

	/**
	* 	@desc Загрузка параметров страницы
	*	@method setPageConfig
	**/
	async setPageConfig ({ commit }, name) {
		let response = await services.getPageConfig(this.$axios, name)
		commit('SET_PAGE_CONFIG', response)
	},

	/**
	* 	@desc Сброс параметров страницы
	*	@method resetPageConfig
	**/
	resetPageConfig ({ commit }) {
		commit('SET_PAGE_CONFIG', null)
	}
}