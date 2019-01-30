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
		],
		script: [
			{type: 'text/javascript', src: `https://socket.hearts-club.com/socket.io/socket.io.js`}
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
		},
		vendor: ['axios', 'vue-cookie']
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
		'cookie-universal-nuxt',
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
		'/api/': { target: 'https://api.hearts-club.com/', pathRewrite: {'^/api/': ''}},
		'/socket/': { target: 'https://socket.hearts-club.com/', pathRewrite: {'^/socket/': ''}}
	},
	// serverMiddleware: ['./api/auth'],
	/* - - - - - - - - -*/
	/*       ROUTER     */
	/* - - - - - - - - -*/
	router: {
		middleware: [
			'page_config',
			'csrf-token'
		]
	},
	
	/* - - - - - - - - -*/
	/*      PLUGINS     */
	/* - - - - - - - - -*/
	plugins: [
		'~/plugins/translate',
		'~/plugins/axios',
		'~plugins/vue-cookies.js',
		{ src: '~/plugins/log', ssr: false },
		{ src: '~/plugins/swiper.js', ssr: false },
		{ src: '~/plugins/lazyload.js', ssr: false },
		{ src: '~/plugins/laravel-echo.js', ssr: false},
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
					login: { url: '/api/login', method: 'post', propertyName: 'access_token'},
					logout: { url: '/api/logout', method: 'post'},
					user: { url: '/api/user', method: 'post', propertyName: 'user'}
				}
			},
			tokenRequired: true,
			tokenType: 'Bearer'
		},
		redirect: {
			login: '/',
			logout: '/'
		},
		token: { name: '_hc_token.' },
		cookie: { name: '_hc_token' }
	}
}
