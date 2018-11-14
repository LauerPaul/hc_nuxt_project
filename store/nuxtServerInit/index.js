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
const nuxtServerInit =  ({ commit, dispatch }, { req, res, error, app }) => {
	console.log('>>> nuxtServerInit <<<');
	// Set current language
	const foundLocale = locales.find(l => req.headers.host.indexOf(l.domain) !== -1)
	if (!foundLocale) return error({statusCode: 404, message: 'Page not found'}) 
	
	res.setHeader('Set-Cookie', [`lang=${foundLocale.code}`]);
	commit('App/SET_LANG', foundLocale.code, { root: true })
	dispatch('App/getLocales', foundLocale.code, { root: true })

	// Set layouts config
	dispatch('App/getConfig', { root: true })
}

export default nuxtServerInit