import axios from 'axios'

export default {
	/**
	*   Запрос данных пользователя
	*   @param {string} user_url - url или id запрашиваемой страницы
	*   @param {string} token - token
	*   @return {promisse} - результат
	*   @method getProfile
	**/
	getProfile (user_url, token) {
		if (user_url && token){
			return axios.post(`https://api.hearts-club.com/api/user`, user_url, {
				headers: {
					'X-Requested-With': 'XMLHttpRequest',
					'Content-Type': 'application/json',
					'Authorization': token

				}
			})
		}
		// if (user_url) return require(`~/tmp_test/users/veronica_data.json`)
		else return false
	},

	/**
	*   Запрос вторичных данных пользователя
	*   @param {object} axios - плагин axios
	*   @param {string} user_id - id пользователя, галерею которого нужно загрузить
	*   @return {promisse} - результат
	*   @method getProfile_secondData
	**/
	async getProfile_secondData (user_id, gallery=false) {
		if (user_id) {
			let result = await axios.post(`https://api.hearts-club.com/api/user/params/second`, {id: user_id})
			result = result.data
			result.gallery = require(`~/tmp_test/users/veronica_gallery.json`)
			
			return result
		} else return false
	},

	/**
	*   Запрос данных пользователя
	*   @param {object} axios - плагин axios
	*   @param {string} user_id - id пользователя, галерею которого нужно загрузить
	*   @return {promisse} - результат
	*   @method getGallery
	**/
	getGallery (user_id) {
		// if (axios && user_id) return axios.get(`/tmp_test/locales/${lang}.json`)
		if (user_id) return require(`~/tmp_test/users/veronica_gallery.json`)
		else return false
	},

	/**
	*   Запрос заметки к профилю пользователя
	*   @param {object} axios - плагин axios
	*   @param {string} user_url - url или id запрашиваемой страницы
	*   @return {promisse} - результат
	*   @method getNote
	**/
	getNote (params) {
		if (params.user && params.user_2){
			// return axios.get(`/tmp_test/locales/${lang}.json`)
			return 'Какой-то текст, который был записан пользователем ранее. Виден он только мне, а другие пользователи его не видят!'
		} else return false
	},

	/**
	*   Запрос на обновление заметки к профилю пользователя
	*   @param {object} axios - плагин axios
	*   @param {string} params - параметры
	*   @param {number} params.user - ID авторизованного пользователя
	*   @param {number} params.user_2 - ID профиля, к которому нужно записать заметку
	*   @param {string} params.text - текст заметки
	*   @return {promisse} - результат
	*   @method note
	**/
	postNote (params) {
		if (params.user && params.user_2){
			// return axios.post(`/tmp_test/locales/${lang}.json`, params)
			console.log('user:' + params.user, 'user_2:' + params.user_2);
		} else return false
	},

	/**
	*   Запрос на обновление статуса пользователя в списке "избранное"
	*   @param {object} axios - плагин axios
	*   @param {string} params - параметры
	*   @param {number} params.user - ID авторизованного пользователя
	*   @param {number} params.user_2 - ID профиля, к которому нужно записать заметку
	*   @param {string} params.filters - массив id фильтров авторизованного пользователя, которые нужно применить к выбранному профилю
	*   @return {promisse} - результат
	*   @method note
	**/
	postFavorite (params) {
		if (params.user && params.user_2){
			// return axios.post(`/tmp_test/locales/${lang}.json`, params)
			console.log('user:' + params.user, 'user_2:' + params.user_2);
			return true
		} else return false
	}
}