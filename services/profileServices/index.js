import amqp from 'amqplib'
import basename from 'path'
import Promise from 'bluebird'
import uuid from 'node-uuid'


export default {
	/**
	*   Запрос данных пользователя
	*   @param {object} axios - плагин axios
	*   @param {string} user_url - url или id запрашиваемой страницы
	*   @return {promisse} - результат
	*   @method getProfile
	**/
	getProfile (axios, user_url) {
		try {} catch (e) { process.exit(1) }

		let data = {'id': '', 'url': 'paul.lauer'}

		amqp.connect(process.env.AMQP_HOST).then(conn => {
			return conn.createChannel().then(ch => {
				return new Promise(resolve => {
					let corrId = uuid();
					let maybeAnswer = (msg) => { if (msg.properties.correlationId === corrId) resolve(msg.content.toString()) }
					let ok = ch.assertQueue('', { exclusive: true }).then(qok => { return qok.queue; })

					ok = ok.then(queue => {
						return ch.consume(queue, maybeAnswer, {noAck: true}).then(() => { return queue; })
					})

					ok = ok.then(queue => {
						console.log(' [x] Requesting', JSON.stringify(data))
						ch.sendToQueue('get_user', Buffer.from(JSON.stringify(data)),
							{ 
								correlationId: corrId,
								replyTo: queue,
								content_type: 'application/json'
							}
						)
					})
				})
		  	}
		  )
		  .then(fibN => {
		  	console.log(3);
		    console.log(' [.] Got %d', fibN)
		  })
		  .finally(() => { conn.close() })
		}).catch(console.warn)

		// if (axios && user_url) return axios.get(`/tmp_test/locales/${lang}.json`)
		if (axios && user_url) return require(`~/tmp_test/users/veronica_data.json`)
		else return false
	},

	/**
	*   Запрос вторичных данных пользователя
	*   @param {object} axios - плагин axios
	*   @param {string} user_id - id пользователя, галерею которого нужно загрузить
	*   @return {promisse} - результат
	*   @method getProfile_secondData
	**/
	getProfile_secondData (axios, user_id, gallery=false) {
		// if (axios && user_id) return axios.get(`/tmp_test/locales/${lang}.json`)
		if (axios && user_id) {
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
	getGallery (axios, user_id) {
		// if (axios && user_id) return axios.get(`/tmp_test/locales/${lang}.json`)
		if (axios && user_id) return require(`~/tmp_test/users/veronica_gallery.json`)
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