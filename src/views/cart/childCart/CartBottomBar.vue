<!--
 * @Author: your name
 * @Date: 2020-07-03 21:29:31
 * @LastEditTime: 2020-07-14 11:12:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myNotes\project\supermall\src\views\cart\childCart\cartBottomBar.vue
--> 
<template>
  <div class="bottom-bar">
    <div class="check-all" @click="checkAll">
      <check-button :isCheck="isCheckAll"></check-button>
      <span>全选</span>
    </div>
    <div class="price">合计：￥{{totalPrice}}</div>
    <div class="calculate">去计算({{totalCount}})</div>
  </div>
</template>

<script>
import CheckButton from "content/checkButton/CheckButton";
import {mapGetters} from "vuex"
export default {
  components: {
    CheckButton
  },
  computed:{
    ...mapGetters(['cartList']),
    totalPrice(){
      return this.cartList.filter((item)=>{
        return item.check
      }).reduce((prevalue,item)=>{
        return prevalue + item.price*item.count
      },0).toFixed(2)
    },
    totalCount(){
      return this.cartList.filter((item)=>{
        return item.check
      }).length
    },
    isCheckAll(){
      // 有一个没有选中就为false

      if(!this.cartList.length) return false
      // 1.filter方法
      // 效率不高，因为要遍历整个数组
      // return !this.cartList.filter(item=>!item.check).length

      // 2.find方法
      // return !this.cartList.find(item=>!item.check)

      // 3.普通遍历
      for(let item of this.cartList){
        if(!item.check){
          return false
        }
      }
      return true
    }
  },
  methods:{
    //全选按钮的点击
    checkAll(){
      if(this.isCheckAll){
        this.cartList.forEach(item => {
          item.check = false
        });
      }else{
        this.cartList.forEach(item=>{
          item.check = true
        })
      }
      
    }
  }
};
</script>


<style scoped>
.bottom-bar {
  height: 40px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 49px;
  z-index: 15;
  background-color: #fff;
  display: flex;
  align-items: center;
}
.check-all{
  width: 20%;
  display: flex;
}
.check-all span{
  margin-left: 3px;
}
.price{
  flex:1;
}
.calculate{
  width:30%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #fff;
  background-color: orangered;

}
</style>