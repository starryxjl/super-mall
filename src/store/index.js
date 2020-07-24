/*
 * @Author: your name
 * @Date: 2020-06-13 16:43:52
 * @LastEditTime: 2020-07-03 22:07:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myNotes\project\supermall\src\store\index.js
 */ 
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartItems:[]
  },
  getters,
  mutations,
  actions,
  modules: {
  }
})
