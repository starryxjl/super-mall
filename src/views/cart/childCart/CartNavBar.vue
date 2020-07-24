<!--
 * @Author: your name
 * @Date: 2020-07-03 21:14:52
 * @LastEditTime: 2020-07-03 23:06:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myNotes\project\supermall\src\views\cart\childCart\cartNavBar.vue
--> 
<template>
<nav-bar><div slot="center">购物车({{cartLength}})</div></nav-bar>
</template>

<script>
import NavBar from 'common/navbar/NavBar'

export default {
  name:'CartNavBar',
  components:{
    NavBar
  },
  props:{
    cartLength:{
      type:Number,
      default:0
    }
  }
  
}
</script>

<style scoped>
.nav-bar{
  color: #fff;
  background-color: var(--color-tint);
}

</style>