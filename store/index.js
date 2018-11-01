/**
*   @version 1.0 beta
*   @module ⭐Store
*   @desc <strong>Store</strong>
*   @see ~/store/index
*
*   @author Pavel Lauer (front-end developer lauer.agency)
*   @copyright 2018©hearts-club.com
*/
import Vuex from 'vuex'
import Vue from 'vue'
import nuxtServerInit from './nuxtServerInit/'

Vue.use(Vuex)

import App from '@/store/app'
import auth from '@/store/auth'

/**
* > [store/nuxtServerInit]{@link module:store/app}
* > [Store App]{@link module:store/app}
* @method init
*/
const store = () => {
  return new Vuex.Store({
  	actions: {
  		nuxtServerInit
  	},
    modules: {
        App,
        auth
    },
  })
}

export default store