/**
*   @module config/locales
*   @desc Локализации приложения
*   @see ~/config/locales
*
*   @author Pavel Lauer (front-end developer lauer.agency)
*   @copyright 2018©hearts-club.com
*/
export default [
	{
		code: 'en',
		iso: 'en-US',
		name: 'English',
		domain: process.env.NODE_ENV == 'development' ? process.env.DOMAIN_DEV_EN : process.env.DOMAIN_EN
	},
	{
		code: 'ru',
		iso: 'ru-RU',
		name: 'Русский',
		domain: process.env.NODE_ENV == 'development' ? process.env.DOMAIN_DEV_RU : process.env.DOMAIN_RU
	}
]