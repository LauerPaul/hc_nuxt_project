/**
* Сервисы для store [App]{@link module:store/app} и основных методов приложения
*
* @module services/appServices
* @see @/services/appServices
*
* @author Pavel Lauer (front-end developer lauer.agency)
* @copyright 2018©hearts-club.com
*/

import axios from 'axios'

export default {
	/**
	*   Запрос переводов
	*   @param {string} lang - текущий язык
	*   @return {promisse} - результат
	*   @method getLocales
	**/
	getLocales (lang) {
		// if (axios && lang) return axios.get(`/tmp_test/locales/${lang}.json`)
		if (lang) return require(`~/tmp_test/locales/${lang}.json`)
		else return false
	},

	/**
	*   Запрос параметров страниц и слоев
	*   @method getConfig
	*   @return {promisse} - результат
	**/
	getConfig () {
		// if (axios && lang) return axios.get(`/tmp_test/locales/${lang}.json`)
		return require(`~/tmp_test/configs/config.json`)
	},

	/**
	*   Запрос параметров данных пользователя
	*   @method getParams
	*   @return {object} - результат
	**/
	getParams () {
		return axios.post(`https://api.hearts-club.com/api/user/params`)
	},

	/**
	*   Запрос параметров страниц и слоев
	* 	@param {string} page - ключ страницы
	*   @method getPageConfig
	*   @return {promisse} - результат
	**/
	getPageConfig (page) {
		// console.log('SERVICE PAGE CONFIG ' + page);
		// if (axios && lang) return axios.get(`/tmp_test/locales/${lang}.json`)
		if (page) return require(`~/tmp_test/configs/pages/${page}.json`)
		else return false
	}
}