/**
* Сервисы для store [App]{@link module:store/app}
*
* @module services/appServices
* @see @/services/appServices
*
* @author Pavel Lauer (front-end developer lauer.agency)
* @copyright 2018©hearts-club.com
*/
export default {
	/**
	*   Запрос переводов
	*   
	*   @param {object} axios - плагин axios
	*   @param {string} lang - текущий язык
	*   
	*   @method getMessages
	*   @return {promisse} - результат
	**/
	getMessages (axios, lang) {
		// if (axios && lang) return axios.get(`/tmp_test/locales/${lang}.json`)
		if (axios && lang) return require(`~/tmp_test/locales/${lang}.json`)
		else return false
	},

	/**
	*   Запрос параметров страниц и слоев
	*
	* 	@param {object} axios - плагин axios
	*   
	*   @method getConfig
	*   @return {promisse} - результат
	**/
	getConfig (axios) {
		// if (axios && lang) return axios.get(`/tmp_test/locales/${lang}.json`)
		if (axios) return require(`~/tmp_test/configs/config.json`)
		else return false
	}
}