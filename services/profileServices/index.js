import axios from 'axios'

export default {
	/**
	*   Запрос данных пользователя
	*   @param {object} axios - плагин axios
	*   @param {string} user_url - url или id запрашиваемой страницы
	*   @return {promisse} - результат
	*   @method getProfile
	**/
	getProfile (user_url) {
		// if (axios && user_url) return axios.get(`/tmp_test/locales/${lang}.json`)
		if (user_url) return require(`~/tmp_test/users/veronica_data.json`)
		else return false
	},

	/**
	*   Запрос вторичных данных пользователя
	*   @param {object} axios - плагин axios
	*   @param {string} user_id - id пользователя, галерею которого нужно загрузить
	*   @return {promisse} - результат
	*   @method getProfile_secondData
	**/
	getProfile_secondData (user_id, gallery=false) {
		// if (axios && user_id) return axios.get(`/tmp_test/locales/${lang}.json`)
		if (user_id) {
			let result = require(`~/tmp_test/users/veronica_second_data.json`)
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