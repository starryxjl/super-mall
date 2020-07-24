<!--
 * @Author: your name
 * @Date: 2020-06-18 20:12:38
 * @LastEditTime: 2020-06-20 15:54:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myNotes\project\supermall\src\components\common\navbar\NavBar.vue
--> 
<template>
  <div class="nav-bar">
    <div class="nav-left">
      <slot name="left"></slot>
    </div>
    <div class="nav-center">
      <slot name="center"></slot>
    </div>
    <div class="nav-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name:'NavBar'

}
</script>

<style>
.nav-bar{
  display: flex;
  text-align: center;
  height: 44px;
  line-height: 44px;
  box-shadow: 0 1px 1px rgba(0,0,0,.1);
}
.nav-left{
  width: 60px;
}
.nav-right{
  width: 60px;
}
.nav-center{
  flex:1;
}
</style>