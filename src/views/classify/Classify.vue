<!--
 * @Author: your name
 * @Date: 2020-06-05 16:08:23
 * @LastEditTime: 2020-06-23 16:28:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myNotes\07-vue\13-路由\tabbar\src\components\tabbar\classify.vue
--> 
<template>
  <div class="wrapper">
    <div class="content">
      <ul>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: 'Classify',
  mounted() {
    let bscroll = new BScroll(".wrapper", {
      probeType:3,
      pullUpLoad:true
    })
    bscroll.on('scroll',position=>{
      // console.log(position);
      
    })
    bscroll.on('pullingUp',()=>{
      console.log('上拉记载更多');
      bscroll.finishPullUp()
    })
  }
};
</script>

<style scoped>
.wrapper {
  height: 100px;
  background: chocolate;
}
</style>