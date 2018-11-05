/**
* @module components/common/site-menu
* @see @/components/common/site-menu
*
* @version 1.0
* @desc Site menu
*
* @author Pavel Uhrynovych (lauer.agency)
* @copyright 2018©hearts-club.com
*/

import { mapState } from 'vuex'

const methods = {
	/**
	*   @desc Формирует роут элемента списка меню
	*   @param {object} item - объект элемента
	* 	@return {object|string} объект для router-link(:to) или #, если объект имеет ключ logout (кнопка выхода)
	*   @method routeFormat
	**/
	routeFormat (item) {
		if (!item || item.key == 'logout') return '#'
		else return (item.link_type == 'name' ? {name: item.link} : {path: item.link})
	},

	/**
	*   @desc Формирует селектор class элемента списка меню
	*   @param {object} item - объект элемента
	* 	@return {false|string} если объект не имеет специального класса или статуса false - false; Строка класса
	*   @method elementClass
	**/
	elementClass (item) {
		if (item) {
			if(item.special_class && !item.status) return `${item.special_class} disabled`
			else if(item.special_class) return item.special_class
			else return 'disabled'
		} else return false
	} 
}

/** Export component */
export default {
	data () {
		return {
			notify: {
				club: 3524,
				updates: 12,
				messages: 3,
				meets: 1,
				suitable: 32
			}
		}
	},

	computed: {
		...mapState('App', {
			'list': 'menu',
			'lang': 'locale'
		})
	},

	/**
	* @desc ▶ Hook reporting
	* <strong style="color:red; font-size: 18px;">ⓘ</strong> 
	* @event module:components/common/site-menu~Compomemt <strong>Site menu</strong> mounted
	*/
	mounted: function(){
		// Log mounted hook
		this.$log.info('component \'Right column\' (@/components/common/site-menu) -> mounted hook init');
	},
	/**
	* Компонент использует компоненты:
	*/
	components: {
	},

	// Methods
	methods: methods,
}