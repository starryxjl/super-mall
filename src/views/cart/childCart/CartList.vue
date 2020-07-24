<!--
 * @Author: your name
 * @Date: 2020-07-03 22:48:52
 * @LastEditTime: 2020-07-14 09:00:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myNotes\project\supermall\src\views\cart\childCart\CartList.vue
--> 
<template>
  <div class="cart-list">
    <div v-for="(item,index) in cartList" :key="index">
      <cart-list-item :good="item"></cart-list-item>
    </div>
  </div>
</template>

<script>
import CartListItem from "./CartListItem";

export default {
  props: {
    cartList: {
      type: Array,
      default: []
    }
  },
  components: {
    CartListItem,
  }
};
</script>

<style scoped>
</style>