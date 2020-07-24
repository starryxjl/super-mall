<!--
 * @Author: your name
 * @Date: 2020-06-20 08:28:15
 * @LastEditTime: 2020-06-26 20:50:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myNotes\project\supermall\src\views\home\childHome\HomeSwiper.vue
--> 
<template>
  <swiper>
    <swiper-item v-for="(item,index) in banners" :key="index"> 
      <a :href="item.link">
        <img @load="swiperImageLoad" :src="item.image" alt="">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper,SwiperItem} from 'common/swiper/index'
export default {
  data(){
    return {
      isLoad:false
    }
  },
  components:{
    Swiper,
    SwiperItem  
  },
  props:{
    banners:{
      type:Array,
      default:[]
    },
    recommends:{
      type:Array,
      default:[]
    }
  },
  methods:{
    swiperImageLoad(){
      // 只发送一次
      if(!this.isLoad){
        this.$emit('swiperImageLoad')
        this.isLoad = true
      }
    }

  }
}
</script>

<style>

</style>