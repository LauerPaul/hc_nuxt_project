export default class Cookie {

	constructor(items) {
		if (!items) return false

		this.items = items
		this.result = null
	}

	/**
	* Распарсивание кук из строки в объект (например из заголовка REST).
	* Работает сострокой и массивом
	* @method parse
	* @return {array}
	**/
	parse () {
		if (!this.items) return
	 	// If items is array
	 	if (Array.isArray(this.items)) return this.parseCookieArray()
	 	// If item is string
	 	else {
	 		let result = this.parseCookieString(this.items)
	 		this.result = [result]

 			return this.result
	 	}
	}
	
	/**
	* Распарсивание нескольких кук (несколько строк в массиве, где одна строка - одна кука).
	* @method parseCookieArray
	* @return {array}
	**/
	parseCookieArray () {
		this.result = []

 		this.items.filter((item) => {
			this.result.push(this.parseCookieString(item))
		})

		return this.result
	}
	
	/**
	* Распарсивание строки куки.
	* @method parseCookieString
	* @return {object}
	**/
	parseCookieString (item = false) {
		if (typeof(item) == 'undefined' || !item) return false

		let items = item.split(';')
	 	let result = {
	 		name: null,
	 		value: null
	 	}

	 	if (item.length > 1) result.options = {}

	 	items.filter((elemen, index) => {
			let cash = elemen.replace(/^\s+/g, '').split('=')
	 		
	 		// Set name & value
	 		if (index == 0) {
	 			result.name = cash[0]
	 			result.value = cash[1]
	 		}
	 		// Set options
	 		else {
	 			let key = ''
	 			let value = ''

	 			switch(cash[0]) {
	 				case 'Max-Age':
		 				key = 'maxAge'
		 				value = parseInt(cash[1])
	 					
	 					break;
	 				case 'expires':
	 					key = 'expires'
	 					// value = Date.parse(cash[1])
	 					value = false
	 					break;

	 				default:
	 					key = cash[0]
	 					value = cash[1]
	 			}

	 			if (cash[1]) result.options[key] = value
	 		}
		})
		return result
	}

	/**
	* Назначение куки с помощью используемого плагина.
	* Данный метод необходим для быстрого назначения нескольких кук, поэтому, принимает только массив
	* @param {object} plugin - объект используемого плагина
	* @param {array} items - массив кук {name: 'string', value: 'string', options: {...}}
	* @method setCookie
	**/
	setCookie (plugin = false, items = false) {
		let items_ = items ? items : this.result
		if (!Array.isArray(items_) || !plugin) return false


		for (let item of items_) {
			let options = typeof(item.options) !== 'undefined' && item.options ? item.options : ''
			console.log(item.options);
			plugin.set(item.name, item.value, item.options)
		}
	}
}