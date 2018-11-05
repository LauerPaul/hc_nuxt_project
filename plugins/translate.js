import Vue from 'vue'

export default ({ app, store }) => {
	Vue.prototype.$t = (string) => {
		if (string) {
			let f = string.split('.')
			let data = store.state.App.translation

			for(let key of f) {
				if (data) data = data[key]
				else return string
			}

			return data
		} else return store.state.App.locale
	}
}
