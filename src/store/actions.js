/*
 * @Author: your name
 * @Date: 2020-07-03 12:21:46
 * @LastEditTime: 2020-07-24 17:33:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myNotes\project\supermall\src\router\actions.js
 */
export default {

  addCart({ state, commit }, payload) {
    // 判断如果已经加入购物车，则数量加1，如未加入购物车，则数量设置为1

    // 注意这里的设计巧妙之处：新建一个局部变量oldProduction

    // 1.for循环

    // let oldProduct = null
    // for(let item of state.cartItems){
    //   if(item.iid === payload.iid){
    //     oldProduct = item
    //     // 指向匹配到的商品页
    //   }
    // }
    // if(oldProduct){
    //   // 说明已被加入购物车
    //  oldProduct.count += 1
    // }else{
    //   // 未被加入购物车
    //   payload.count = 1
    //   state.cartItems.push(payload)
    // }

    // 3.find方法
    // 可以返回promise给dispatch接收
    return new Promise((resolve, reject) => {
      let oldProduct = state.cartItems.find((item) => {
        return item.iid === payload.iid
      })
      console.log(oldProduct);

      if (oldProduct) {
        commit('addCounter', oldProduct)
        resolve('商品数量加1')
      } else {
        payload.count = 1
        commit('addToCart', payload)
        resolve('添加商品成功')
      }
    })


  }
}
