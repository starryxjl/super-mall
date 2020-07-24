/*
 * @Author: your name
 * @Date: 2020-06-13 16:43:52
 * @LastEditTime: 2020-06-27 09:29:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myNotes\project\supermall\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/Home')
const Classify = () => import('views/classify/Classify')
const Cart = () => import('views/cart/Cart')
const My = () => import('views/my/My')

const Detail = () => import('views/detail/Detail')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/classify',
    component: Classify
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/my',
    component: My
  },
 {
   path:'/detail',
   component: Detail
 }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
