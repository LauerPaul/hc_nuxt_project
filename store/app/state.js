/**
*   @version 1.0 beta
*   @module store/app/state
*   @desc <strong>Store App State</strong>
*   @see ~/store/app/state.js
*
*   @author Pavel Lauer (front-end developer lauer.agency)
*   @copyright 2018©hearts-club.com
*/
import locales from '@/config/locales'

export default {
	locale: process.env.DEFAUL_LANGUAGE,
	locales,
	translation: null,
	logo: null,
	config: null,
	menu: null
}
/**
* @namespace ⭐Store-app▸state
*   @property {string} locale - текущий язык приложения
*   @property {array} locales - массив объектов с языковыми параметрами
*       @property {string} locales.object.code - код языка в нижнем регистре (например: 'ru')
*       @property {string} locales.object.iso - iso-код языка для seo (напремер: 'ru-RU')
*       @property {string} locales.object.name - название языка (напремер: 'Русский')
*       @property {string} locales.object.domain - домен, к которому привязан язык (например: ru.domain.com)
*   @property {null|object} translation - объект переводов для текущего языка
*  
*   @property {null|object} logo - объект с параметрами логотипа
*       @property {object} logo.src - ссылка
*       @property {object} logo.alt - атрибут ALT
*   @property {null|object} config - объект с параметрами компонентов и страниц
*  
*    @property {null|array} menu - массив объектов с параметрами списка меню
*       @property {string} menu.object.key - уникальный ключ элемента
*       @property {object} menu.object.name - объект названий
*           @property {string} menu.object.* - название пункта меню (*ключем является code языка)
*       @property {string} menu.object.link - ссылка меню (может быть name роута - зависит от параметра link_type)
*       @property {string} menu.object.link_type - ключ для router-link (path - ссылка | name - название роута [Подробнее]{@link site:https://router.vuejs.org/api/#to})
*       @property {string} menu.object.icon - селектор class в html для иконки
*       @property {string} menu.object.special_class - специальный селектор class в html для текущего элемента списка
*       @property {boolean} menu.object.status - статус кликабельности
*       @property {boolean} menu.object.notify - статус оповищиней (возможны ли оповищения *counter для данного пункта)
*       @property {boolean} menu.object.devider - разделительная полоса в списке меню (при значении true все остальные ключи игнорируются, поэтому, они могут отсутствовать)
**/