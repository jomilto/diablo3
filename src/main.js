// Paquetes de NPM
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

// Archivos locales de la app
import App from './App.vue'
import router from './router'
import store from './store'

// Traer el css global
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

require('dotenv').config()

// configuración extra
Vue.use(BootstrapVue)
Vue.config.productionTip = false

// isntancia principal
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
