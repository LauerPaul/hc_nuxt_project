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
		'/auth/': { target: 'https://auth.hearts-club.com/api/', pathRewrite: {'^/auth/': ''}},
		'/api/': { target: 'https://api.hearts-club.com/ajax/', pathRewrite: {'^/api/': '', '^/ajax/': ''}},
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
					login: { url: '/auth/login/', method: 'post', propertyName: 'access_token'},
					logout: { url: '/auth/logout/', method: 'post'},
					user: { url: '/auth/data', method: 'post', propertyName: 'user'}
				}
			},
			tokenRequired: true,
			tokenType: 'Bearer'
		},
		redirect: {
			login: '/',
			logout: '/',
			// home: '/'
		},
		token: { name: '_hc_token.' },
		cookie: { name: '_hc_token' },
		// rewriteRedirects: true
	}
}
