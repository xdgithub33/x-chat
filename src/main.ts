import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import store from './store'
import router from './router'
import Rem from './utils/rem'
import './registerServiceWorker'
import VueCookies from 'vue-cookies'
import IChatHeader from './components/common/IChatHeader.vue'
import './plugins/vant'
import './style/index.less' //引入默认样式|自定义样式

Rem(false, 100, 1) //rem屏幕适配

Vue.prototype.$axios = axios //vue的原型链上挂载axios
Vue.component('IChatHeader', IChatHeader)
Vue.use(VueCookies)

Vue.config.productionTip = false //原有的

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
