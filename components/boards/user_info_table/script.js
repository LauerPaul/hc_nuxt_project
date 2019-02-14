/**
* @module components/boards/socium
* @see @/components/boards/socium
*
* @version 1.0
* @desc Board Socium
*
* @author Pavel Uhrynovych (lauer.agency)
* @copyright 2018©hearts-club.com
*/
import board from '@/components/board'
import table from '@/components/elements/table'

const data = {
	/**
	* @typedef {Object} Data
	*	 @prop {boolean} load - статус загрузки компонента
	*/
	load: false
}

const methods = {
}

export default {
	data: function() { return data },

	/**
	* @typedef {object} Props
	*	 @prop {object} params - параметры для отображения
	*	 @prop {string} title - ключ в объекте переводов для отображения заголовка
	*	 @prop {string} local_key - строка, которая будет подставлена в ключ, для запроса перевода названия опции 
	*/
	props: ['params', 'title', 'local_key'],

	computed: {
		/**
		* Формирование списка для передачи в компонент table
		* @return {array}
		**/
		list () {
			if (this.params) {
				let result = []

				for (let key in this.params) {
					let val_ = ''

					if (this.params[key]) val_ = this.params[key]
					else {
						let keyEdit = key.split('_').length
						if (keyEdit.length > 1) val_ = keyEdit[0] + keyEdit[1].charAt(0).toUpperCase() + keyEdit[1].substr(1)
						if (val_ && this.params[val_]) val_ = this.params[val_]
						else val_ = null
					}

					result.push({
						"key": this.$t(`${this.local_key}.${key}`),
						"value": val_
					})
				}

				return result
			} else return false
		},

		/**
		* Возвращает перевод для передачи в заголовок
		* @return {string}
		**/
		title_ () { if (this.title) return this.$t(this.title); else return '' }
	},

	/**
	* @desc ▶ Hook reporting <strong style="color:red; font-size: 18px;">ⓘ</strong> 
	* @event module:components/boards/socium~Compomemt <strong>Board Socium</strong> mounted
	*/
	mounted: function(){
		this.$log.info('component \'Board Socium\' (@/components/boards/socium) -> mounted hook init');
	},

	/**
	* Компонент использует компоненты:
	* > [Board]{@link /components/board/}
	* > [Element Table]{@link /components/elements/table}
	*/
	components: {
		board,
		'table-element': table
	},

	methods: methods
}