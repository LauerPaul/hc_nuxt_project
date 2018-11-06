export default {
	/**
	*   Запрос данных пользователя
	*   @param {object} axios - плагин axios
	*   @param {string} user_url - url или id запрашиваемой страницы
	*   @return {promisse} - результат
	*   @method getProfile
	**/
	getProfile (axios, user_url) {
		// if (axios && user_url) return axios.get(`/tmp_test/locales/${lang}.json`)
		if (axios && user_url) return require(`~/tmp_test/users/veronica_data.json`)
		else return false
	},

	/**
	*   Запрос заметки к профилю пользователя
	*   @param {object} axios - плагин axios
	*   @param {string} user_url - url или id запрашиваемой страницы
	*   @return {promisse} - результат
	*   @method getNote
	**/
	getNote (axios, params) {
		if (axios){
			if (params.user && params.user_2){
				// return axios.get(`/tmp_test/locales/${lang}.json`)
				return 'Какой-то текст, который был записан пользователем ранее. Виден он только мне, а другие пользователи его не видят!'
			} else return false
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
	postNote (axios, params) {
		if (axios){
			if (params.user && params.user_2){
				// return axios.post(`/tmp_test/locales/${lang}.json`, params)
				console.log('user:' + params.user, 'user_2:' + params.user_2);
			} else return false
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
	postFavorite (axios, params) {
		if (axios){
			if (params.user && params.user_2){
				// return axios.post(`/tmp_test/locales/${lang}.json`, params)
				console.log('user:' + params.user, 'user_2:' + params.user_2);
				return true
			} else return false
		} else return false
	}
}