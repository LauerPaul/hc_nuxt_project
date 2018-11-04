export default {
	/**
	*   @desc Запрос данных пользователя
	*   @method getMessages
	**/
	getProfile (axios, user_url) {
		// if (axios && user_url) return axios.get(`/tmp_test/locales/${lang}.json`)
		if (axios && user_url) return require(`~/tmp_test/users/veronica_data.json`)
		else return false
	}
}