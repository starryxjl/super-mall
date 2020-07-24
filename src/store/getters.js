/*
 * @Author: your name
 * @Date: 2020-07-03 22:05:35
 * @LastEditTime: 2020-07-03 22:09:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myNotes\project\supermall\src\store\getters.js
 */ 
export default {
  cartList(state){
    return state.cartItems
  },
  cartLength(state){
    return state.cartItems.length
  }
}