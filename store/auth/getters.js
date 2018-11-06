/**
*   @version 1.0 beta
*   @module store/auth/getters
*   @desc <strong>Store auth Getters</strong>
*   @see ~/store/auth/getters.js
*
*   @author Pavel Lauer (front-end developer lauer.agency)
*   @copyright 2018©hearts-club.com
*/
export default {
	/**
	* Запрос ID текущего пользователя
	* @return state.user.id {number}
	* @method userId
	*/
	userId: state => { if (state.user) return state.user.id; else return false }
}