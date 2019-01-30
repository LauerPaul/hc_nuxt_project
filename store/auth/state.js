/**
*   @version 1.0 beta
*   @module store/auth/state
*   @desc <strong>Store auth State</strong>
*   @see ~/store/auth/state.js
*
*   @author Pavel Lauer (front-end developer lauer.agency)
*   @copyright 2018©hearts-club.com
*/
export default {
	/**
    * @namespace ⭐Store-auth▸state
    *   @property {object} selectUser - основные данные выбранного пользователя
    *     @prop {object} selectUser.id - id пользователя
    *     @prop {object} selectUser.url - url страницы пользователя
    *     @prop {object} selectUser.status_text - Текстовый статус страницы пользователя
    *     @prop {string} selectUser.fullName_ru - полное имя пользователя кириллицей (если не заполнено - заполняется латиницей)
    *     @prop {string} selectUser.fullName_en - полное имя пользователя латиницей
    *     @prop {object} selectUser.avatar - ссылка на avatar пользователя
    *     @prop {string} selectUser.deviceType - тип оборудования, с которого пользователь пользуется ресурсом на данный момент (**Допустимые значения**: `mobile`, `computer`, `tablet`)
    *     @prop {number} selectUser.age - возраст пользователя
    *     @prop {string} selectUser.zodiac - знак зодиака пользователя
    *     @prop {string} selectUser.country - страна пользователя
    *     @prop {string} selectUser.city - город пользователя
    *     @prop {array} selectUser.lookingFor - массив `id`, кого ищет пользователь
    *     @prop {array} selectUser.purposes - массив `id` целей знакомства на сайте
    *     @prop {boolean} selectUser.isPremium - находится ли профиль в статусе "premium"
    *     @prop {boolean} selectUser.isFavorite - является ли профиль избранным для данного пользователя
    */
    selectUser: null,
    access: {
        csrf: null,
        csrf_date: null
    }
}