import Vue from 'vue'
import axios from 'axios'
import lodash from 'lodash'
import App from './App.vue'
import router from './router'
import './main.css'

Vue.config.productionTip = false
Vue.prototype.URL = 'https://photos.programadorwebvalencia.com/'

// Lodash
Vue.prototype._ = lodash
//
// Axios
Vue.prototype.$axios = axios
axios.defaults.headers.common['Authorization'] = 'Bearer keySmgmJUxaWwmOXm';

// Vue
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
