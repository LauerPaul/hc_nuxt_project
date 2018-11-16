const { resolve } = require('path')

module.exports = {
	rootDir: resolve(__dirname),
	buildDir: resolve(__dirname, '.nuxt'),
	srcDir: __dirname,

	/*
	** Headers of the page
	*/
	head: {
		title: 'hearts-club.com',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: 'dating project - nuxt.js' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
		]
	},
	/*
	** Customize the progress bar color
	*/
	loading: {
	    name: 'chasing-dots',
	    color: '#ff5638',
	    background: 'white',
	    height: '4px'
	 },
	/*
	** Build configuration
	*/
	build: {
		extractCSS: true,
		/*
		** Run ESLint on save
		*/
		extend (config, { isDev }) {
			if (isDev && process.client) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/
				})
			}
		}
	},
	css: [
		resolve(__dirname, 'assets/scss/styles.scss'),
		'swiper/dist/css/swiper.css',
		'vue2-animate/dist/vue2-animate.min.css'
	],
	// differentDomains: process.env.NODE_ENV === 'production',
	modules: [
		'bootstrap-vue/nuxt',
		'@nuxtjs/axios',
		'@nuxtjs/auth',
		['@nuxtjs/dotenv', { path: './config' }],
	],
	/* - - - - - - - - -*/
	/*       AXIOS      */
	/* - - - - - - - - -*/
	axios: {
		proxy: true,
		https: process.env.NODE_ENV == 'development' ? false : true,
		credentials: true
	},
	proxy: {
		'/api/': { target: 'https://api.hearts-club.com', pathRewrite: {'^/api/': ''}}
	},
	// serverMiddleware: ['./api/auth'],
	/* - - - - - - - - -*/
	/*       ROUTER     */
	/* - - - - - - - - -*/
	router: {
		middleware: [
			'page_config'
		]
	},
	
	/* - - - - - - - - -*/
	/*      PLUGINS     */
	/* - - - - - - - - -*/
	plugins: [
		'~/plugins/translate',
		'~/plugins/axios',
		{ src: '~/plugins/log', ssr: false },
		{ src: '~/plugins/swiper.js', ssr: false },
		{ src: '~/plugins/lazyload.js', ssr: false },
		// { src: '~/plugins/vuex-persistedstate.js', ssr: false },
		// { src: '~/plugins/vuex-shared-mutations.js', ssr: false }
	],

	/* - - - - - - - - -*/
  	/*       AUTH       */
  	/* - - - - - - - - -*/
	auth: {
		plugins: [ '~/plugins/auth' ],
		strategies: {
			local: {
				endpoints: {
					login: { url: '/ajax/api/auth/', method: 'post', propertyName: 'token.accessToken', headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'responseType': 'json' } },
					logout: { url: '/ajax/api/user/logout', method: 'post', headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'responseType': 'json' } },
					user: { url: '/ajax/api/user', method: 'get', propertyName: 'user', headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'responseType': 'json' } }
				}
			},
			// auth0: {
			// 	domain: 'nuxt-auth.auth0.com',
			// 	client_id: 'q8lDHfBLJ-Fsziu7bf351OcYQAIe3UJv'
			// },
			// facebook: {
			// 	client_id: '530209634111831',
			// 	userinfo_endpoint: 'https://graph.facebook.com/v2.12/me?fields=about,name,picture{url},email,birthday',
			// 	scope: ['public_profile', 'email', 'user_birthday']
			// },
			// google: {
			// 	client_id:
			// 	'956748748298-kr2t08kdbjq3ke18m3vkl6k843mra1cg.apps.googleusercontent.com'
			// },
			// twitter: {
			// 	client_id: 'FAJNuxjMTicff6ciDKLiZ4t0D'
			// }
		},
		redirect: {
			login: '/',
			logout: '/',
			// home: '/'
		},
		token: { name: 'token' },
		cookie: { name: 'token' },
		// rewriteRedirects: true
	}
}
