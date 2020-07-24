<!--
 * @Author: your name
 * @Date: 2020-06-05 16:08:35
 * @LastEditTime: 2020-07-14 09:01:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myNotes\07-vue\13-路由\tabbar\src\components\cart.vue
--> 
<template>
  <div>
    <cart-nav-bar :cartLength="cartLength"></cart-nav-bar>
    <Scroll class="content" ref="scroll">
      <cart-list :cartList="cartList"></cart-list> 
    </Scroll>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import CartNavBar from './childCart/CartNavBar'
import CartBottomBar from './childCart/CartBottomBar'
import CartList from './childCart/CartList'

import Scroll from 'common/scroll/Scroll'

import {mapGetters} from 'vuex'

export default {
  name:'Cart',
  data(){
    return {
     
    }
  },
  computed:{
    ...mapGetters(['cartList','cartLength'])
  },
  components:{
    CartNavBar,
    CartBottomBar,
    CartList,
    Scroll
  },
  activated(){
    this.$refs.scroll.refresh()
  }
}
</script>

<style scoped>
.content{
  position: absolute;
  top: 44px;
  bottom: 89px;
  left: 0;
  right: 0;
  overflow: hidden;

}

</style>