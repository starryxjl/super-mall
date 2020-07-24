<!--
 * @Author: your name
 * @Date: 2020-06-05 09:30:03
 * @LastEditTime: 2020-06-23 09:08:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myNotes\07-vue\13-路由\tabbar\src\components\tabbar.vue
--> 
<template>
  <div id="tabBar">
    <slot></slot>  
  </div>
</template>

<script>

export default {
  name: "TabBar"
};
</script>

<style>
#tabBar {
  display: flex;
  height: 49px;
  /* 一般tabBar高度都为49px */
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: #cccccc;
  box-shadow: 0 -2px 2px rgba(100, 100, 100, 0.2);
  z-index: 10;
}
</style>