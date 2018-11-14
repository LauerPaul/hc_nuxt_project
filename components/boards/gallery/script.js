/**
* @module components/boards/gallery
* @see @/components/boards/gallery
*
* @version 1.0
* @desc Board gallery profile
*
* @author Pavel Uhrynovych (lauer.agency)
* @copyright 2018©hearts-club.com
*/

import { mapState } from 'vuex'
import board from '@/components/board'
import profileServices from '@/services/profileServices'

const data = {
	/**
	* @typedef {Object} Data
	*	 @prop {boolean} load - статус загрузки компонента
	*	 @prop {object} params_ - объект галереи пользователя (если она была загружена из компонента, а не передана родителем)
	*	 @prop {number} preview_count - количество превью для отображения
	*	 @prop {number} preview_albums_count - количество альбомов для отображения
	*/
	load: true,
	params_: null,
	preview_count: 5,
	preview_albums_count: 3,
	albums_list_mini: true
}

const methods = {
	/**
	* Запрос галереи пользователя (обращается к сервису **profileServices** [`getGallery`]{@link /services/profile_services/?id=getgalleryaxios-params-⇒-promisse})
	* @async **true**
	**/
	async getParams () {
		this.$log.debug('component \'Board Gallery\' (@/components/boards/gallery) ->  getParams () - method init')
		
		if (!this.selectUser) return false
		
		this.load = true
		let gallery = await profileServices.getGallery($axios, selectUser.id)
		this.params_ = gallery
		this.load = false
	},

	/**
	* Высчитывает время видео для отображения пользователю
	* @return {string}
	**/
	getVideoTime (time_sec) {
		let minutes = Math.floor(time_sec / 60)
		let seconds = time_sec - Math.floor(time_sec / 60) * 60

		return minutes + (seconds ? ':' + seconds : '')
	}
}

export default {
	data: function() { return data },

	/**
	* Компонент ожидает **props** `:params`. Если объект не был передан - данные будут загружены из компонента
	* 
	* @typedef {object} Props
	*	 @prop {object} params - объект галереи пользователя
	*	 	 @prop {object} params.albums - список альбомов пользователя
	*	         @prop {object} params.albums.objects.id - id альбома
	*	         @prop {object} params.albums.objects.name - название альбома
	*	         @prop {object} params.albums.objects.description - описание альбома
	*        @prop {object} params.gallery - список альбомов пользователя
	*              @prop {number} params.gallery.object.album_id - id альбома, к которому относится файл
	*              @prop {string} params.gallery.object.file_type - тип файла (`photo` или `video`)
	*              @prop {number} params.gallery.object.video_time - время видео ролика в секундах (если тип файла `video`)
	*              @prop {boolean} params.gallery.object.pay - является ли фото платным	
	*              @prop {string} params.gallery.object.src - ссылка на фото
	*              @prop {object} params.gallery.object.preview - объект с ссылками на превью фото (если тип файла `video` - gif-превью видео)
	*              @prop {object} params.gallery.object.poster - объект с ссылками на постеры к видео (если тип файла `video`)
	*/
	props: ['params'],

	/**
	* @namespace
	*/
	computed: {
		...mapState('App', {lang: 'locale'}),
		...mapState('auth', ['selectUser']),
		
		/**
		* Объект альбомов пользователя
		* @return {object}
		**/
		albums () {
			if (this.params && this.params.albums) return this.params.albums
			else if (this.params_ && this.params_.albums) return this.params_.albums
			else return false
		},

		/**
		* Объект фото и видео пользователя
		* @return {object}
		**/
		gallery () {
			if (this.params && this.params.gallery) return this.params.gallery
			else if (this.params_ && this.params_.gallery) return this.params_.gallery
			else return false
		},

		/**
		* Объект превью фото и видео пользователя
		* @return {object}
		**/
		galeryPreview () {
			if (this.gallery.length == this.preview_count+1) return this.gallery

			let files = []
			for (let i = 0; i < 5 && i < this.gallery.length; i++) files.push(this.gallery[i])
			return files
		},

		/**
		* Объект mini превью фото и видео пользователя в tab more
		* @return {object}
		**/
		itemsMore () {
			if (this.gallery.length == this.preview_count+1) return false

			let files = []
			for (let i = this.preview_count; i < 9 && i < this.gallery.length; i++) files.push(this.gallery[i])
			return files
		},

		/**
		* Список альбомов
		* @return {object}
		**/
		albumsList () {
			if (this.albums_list_mini && this.preview_albums_count < this.albums.length) {
				let albums_ = []
				for (let i = 0; i < this.preview_albums_count; i++) albums_.push(this.albums[i])
				return albums_
			} else  this.albums_list_mini = false; return this.albums
		},

		/**
		* Статистика кол-ва фото и видео в альбомах
		* @return {object}
		**/
		albumsStatistic () {
			if (this.albums && this.gallery) {
				let static_ = {}

				this.gallery.filter(item => {
					if (!static_[item.album_id]) static_[item.album_id] = { 'photo': 0, 'video': 0 }
					static_[item.album_id][item.file_type] += 1
				})

				this.albums.filter(item => { if (!static_[item.id]) static_[item.id] = { 'photo': 0, 'video': 0 } })

				return static_
			} else return false
		},

		/**
		* Количество скрытых альбомов
		* @return {object}
		**/
		moreCount () {
			if (this.albumsStatistic && this.albums_list_mini) {
				let count = this.albums.length - this.preview_albums_count
				for (let item in this.albumsStatistic) if (!this.albumsStatistic[item].video && !this.albumsStatistic[item].photo) count -= 1; 
				return count
			}
		},

		/**
		* Подстановка значений в строку "больше альбомов"
		* @return {string}
		**/
		moreText () {
			if (this.moreCount) {
				let text = this.$t('boards.gallery.more_albums_text').replace('%count%', this.moreCount)
				let replace_ = null	

				if(this.lang == 'ru') { 
					if (this.moreCount == 1) replace_ = ['альбома', 'альбом']
					else if (moreCount <= 4) replace_ = ['альбома', 'альбомов']
				} else if (this.lang == 'en') if (this.moreCount == 1) replace_ = ['albums', 'album']
				if (replace_) text = text.replace(replace_[0], replace_[1])
				return text
			} else return ''
		},

		/**
		* Полное имя пользователя
		* @return {string}
		*/
		fullName () {
			if (this.selectUser && this.selectUser[`fullName_${this.lang}`]) return this.selectUser[`fullName_${this.lang}`]
			else return ''
		},
	},

	/**
	* @desc ▶ Hook reporting <strong style="color:red; font-size: 18px;">ⓘ</strong> 
	* @event module:components/boards/gallery~Compomemt <strong>Board Gallery</strong> mounted
	*/
	mounted: function(){
		this.$log.info('component \'Board Gallery\' (@/components/boards/gallery) -> mounted hook init');

		if(!this.params) return this.getParams()
		else this.load = false
	},

	/**
	* Компонент использует компоненты:
	* > [Board]{@link /components/board/}
	*/
	components: {
		board
	},

	methods
}