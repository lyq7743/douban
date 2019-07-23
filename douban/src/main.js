// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'									/* 将axios进行引入 */
Vue.config.productionTip = false
Vue.prototype.$Axios = Axios								/* 将引入的axios以原型的属性进行定义 */

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
