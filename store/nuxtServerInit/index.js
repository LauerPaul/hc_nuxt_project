/**
*   @version 1.0 beta
*   @module store/nuxtServerInit
*   @desc <strong>Store nuxtServerInit method</strong>
*   @see ~/store/nuxtServerInit
*
*   @author Pavel Lauer (front-end developer lauer.agency)
*   @copyright 2018©hearts-club.com
*/
import locales from '~/config/locales'

/**
* 	@desc (Server init)
* 	- set current language > call [SET_LANG]{@link modole:store/app/mutations} > [getLocales]{@link modole:store/app/actions}
*	- set layouts config > call [getConfig]{@link module:store/app/actions}
*	
*	@method nuxtServerInit
**/
 import timestamp from "~/libs/timestamp";

const nuxtServerInit =  ({ commit, dispatch, state }, { req, res, error, app }) => {
	console.log('Nuxt Server Init');

	// Set current language
	const foundLocale = locales.find(l => req.headers.host.indexOf(l.domain) !== -1)
	if (!foundLocale) return error({statusCode: 404, message: 'Page not found'}) 
	
	res.setHeader('Set-Cookie', [`lang=${foundLocale.code}`])

	commit('App/SET_LANG', foundLocale.code, { root: true })
	dispatch('App/getLocales', foundLocale.code, { root: true })

	// Set layouts config
	dispatch('App/getConfig', { root: true })
	

	// =======================================
	// Set profiles params
	// =======================================
	// ! Если кэш не загружался ранее
	if (!state.auth.params) dispatch('auth/getParams', { root: true }), console.log('Nuxt Server Init - используется кэш списков параметров страницы пользователя')
	// ! Если кэш был загружен ранее
	else {
		// Если кэш просрочен - обновляем
		let userParamsUpdate = timestamp.validate(state.auth.params.timestamp, 600)
		if (userParamsUpdate) dispatch('auth/getParams', { root: true }), console.log('Nuxt Server Init - загружаем списки параметров страницы пользователя')
	}
}

export default nuxtServerInit