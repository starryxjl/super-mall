/*
 * @Author: your name
 * @Date: 2020-07-03 12:21:59
 * @LastEditTime: 2020-07-03 12:22:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myNotes\project\supermall\src\router\mutations.js
 */ 
export default {
  // mutations唯一的目的就是修改state状态
    // mutations中的每个方法尽可能完成的事件比较单一
    addCounter(state,payload){
      payload.count ++
    },
    addToCart(state,payload){
      payload.check = false
      state.cartItems.push(payload)
    }
}