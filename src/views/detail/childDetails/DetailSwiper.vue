
<!--
 * @Author: your name
 * @Date: 2020-06-27 18:18:08
 * @LastEditTime: 2020-06-29 10:19:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myNotes\project\supermall\src\views\detail\childDetails\DetailSwiper.vue
--> 
<template>
  <Swiper class="content" v-if="topImages">
    <swiper-item v-for="(item,index) in topImages" :key="index">
      <img :src="item"/>
    </swiper-item>
  </Swiper>
</template>

<script>
import { Swiper, SwiperItem } from "common/swiper";
export default {
  name: "DetailSwiper",
  props: {
    topImages: {
      type: Array,
      default: []
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
 
};
</script>

<style scoped>
.content {
  height: 300px;
  text-align: center;
}
</style>