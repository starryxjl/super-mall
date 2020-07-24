/*
 * @Author: your name
 * @Date: 2020-06-13 16:43:52
 * @LastEditTime: 2020-07-24 17:11:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myNotes\project\supermall\src\main.js
 */ 
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from 'common/toast'

Vue.config.productionTip = false
Vue.use(toast)
// 内部执行toast.install()

// 初始化全局事件总线
Vue.prototype.$eventBus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
