import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLodash from 'vue-lodash'
import App from './App.vue'
import router from './router'
import './main.css'

Vue.use(VueAxios, axios)

Vue.use(VueLodash) 

Vue.config.productionTip = false

axios.defaults.headers.common['Authorization'] = 'Bearer keySmgmJUxaWwmOXm';

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
