<!--
 * @Author: your name
 * @Date: 2020-06-13 16:43:52
 * @LastEditTime: 2020-06-27 20:08:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myNotes\project\supermall\src\App.vue
--> 
<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>

    <MainTabBar />
  </div>
</template>
<script>
import MainTabBar from "content/mainTabbar/MainTabBar";
export default {
  name: "App",
  components: {
    MainTabBar
  }
};
</script>
<style>
@import "assets/css/base.css";
</style>
