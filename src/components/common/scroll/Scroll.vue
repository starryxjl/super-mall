<!--
 * @Author: your name
 * @Date: 2020-06-23 11:17:20
 * @LastEditTime: 2020-07-01 17:41:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myNotes\project\supermall\src\components\common\bscroll\BScroll.vue
--> 
<template>
  <div ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name:'Scroll',
  data(){
    return{
      scroll:null   
    }
  },
  // 使用时根据情况传参数，避免不必要的操作，优化性能
  props:{
    probeType:{
      type:Number,
      default:0
    },
    pullUpLoad:{
      type:Boolean|Object,
      default:false
    }
  }
  ,
  mounted(){
    console.log('创建scroll');
    // 1.创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrapper,{
      click:true,
      pullUpLoad:this.pullUpLoad,
      probeType:this.probeType
    })
    // 2.监听滚动事件
    this.scroll.on('scroll',(position)=>{
      // console.log(position);
      this.$emit('scroll',position) 
    })
    //3.监听上拉事件
    this.scroll.on('pullingUp',()=>{
      this.$emit('pullingUp')
    })
  },
  methods:{
    // 1.对滚动方法做一个封装
    scrollTo(x,y,time=300){
      // 确保this.scroll有值
      this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x,y,time)
    },
    // 2.finishPullUp方法封装
    finishPullUp(){
      this.scroll.finishPullUp()
    },
    // 3.better-scroll中refresh方法封装
    refresh(){
      console.log("-----");
      this.scroll && this.scroll.refresh()
    },
    scrollY(){
      return this.scroll ? this.scroll.y : 0
    }

  }
}
</script>

<style scoped>

</style>