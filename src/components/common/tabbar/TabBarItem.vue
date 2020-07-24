<!--
 * @Author: your name
 * @Date: 2020-06-05 09:30:41
 * @LastEditTime: 2020-06-27 09:38:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myNotes\07-vue\13-路由\tabbar\src\components\tabbar\tabBarItem.vue
--> 
<template>
<div class="tab-bar-item" @click="link">
  <div v-if="!isActive">
 <slot name="img-icon"></slot>
  </div>
  <div v-else>
 <slot name="img-icon-active"></slot>
  </div>
  <div :style="clickStyle">
  <slot name="font"></slot>
  </div>
</div>
 
</template>

<script>
export default {
  name:'TabBarItem',
  data(){
    return {
      // isActive:false
    }
  },
  props:{
    path:String,
    clickColor:{
      type:String,
      default:"red"
    }
  },
  methods:{
    link(){
      this.$router.push(this.path)
    }
  },
  computed:{
    isActive(){
      // 只有活跃的路由isActive才为true
      return this.$route.path.indexOf(this.path)!==-1
    },
    clickStyle(){
      return this.isActive ? {color:this.clickColor} : {}
    }
  }

}
</script>

<style>
.tab-bar-item{
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img{
  margin-top: 3px;
  width: 25px;
  height: 25px;
  vertical-align: middle;
  /* 消除图片留白 */
}

</style>