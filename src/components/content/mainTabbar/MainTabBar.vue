<!--
 * @Author: your name
 * @Date: 2020-06-05 22:21:05
 * @LastEditTime: 2020-06-23 09:02:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myNotes\07-vue\13-路由\tabbar\src\components\MainTabBar.vue
--> 
<template>
<div class="maintabbar">
   <tabBar>
      <TabBarItem path="/home">
      <img src="~assets/img/tabBar/home.svg" slot="img-icon" alt="">
      <img src="~assets/img/tabBar/home-active.svg" slot="img-icon-active" alt="">
      <div slot="font">首页</div>
    </tabBarItem>
    <TabBarItem path="/classify">
      <img src="~assets/img/tabBar/classify.svg" slot="img-icon" alt="">
      <img src="~assets/img/tabBar/classify-active.svg" slot="img-icon-active" alt="">
      <div slot="font">分类</div>
    </tabBarItem>
    <TabBarItem path="/cart">
      <img src="~assets/img/tabBar/cart.svg" slot="img-icon" alt="">
      <img src="~assets/img/tabBar/cart-active.svg" slot="img-icon-active" alt="">
      <div slot="font">购物车</div>
    </tabBarItem>
    <TabBarItem path="/my">
      <img src="~assets/img/tabBar/my.svg" slot="img-icon" alt="">
      <img src="~assets/img/tabBar/my-active.svg" slot="img-icon-active" alt="">
      <div slot="font">我的</div>
    </tabBarItem>
    </tabBar>
</div>
</template>

<script>
import TabBar from 'common/tabbar/TabBar'
import TabBarItem from 'common/tabbar/TabBarItem'

export default {
  name:'MainTabBar',
  components:{
    TabBarItem,
    TabBar
  }
}
</script>

<style>

</style>