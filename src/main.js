import Vue from 'vue'
import axios from "axios"

import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';


Vue.config.productionTip = false

const axiosConfig = {
  baseURL : "https://backendpruebafinal.herokuapp.com/",
  timeout : 30000,
}


Vue.prototype.$axios = axios.create(axiosConfig)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
