import Vue from 'vue'
import Vuex from 'vuex'

// importamos modulos
import oauth from './modules/oauth'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    oauth
  }
})
