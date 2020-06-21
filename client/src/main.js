import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueSocketIOExt from 'vue-socket.io-extended';
import io from 'socket.io-client';
import vuetify from './plugins/vuetify';
import store from './store'

const socket = io('http://localhost:3300');
Vue.use(VueSocketIOExt, socket, { store });

Vue.config.productionTip = false
new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
