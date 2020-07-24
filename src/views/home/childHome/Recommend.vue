<!--
 * @Author: your name
 * @Date: 2020-06-20 11:14:01
 * @LastEditTime: 2020-06-20 16:00:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myNotes\project\supermall\src\views\home\childHome\Recommend.vue
--> 
<template>
  <div id="recommend">
    <div class="recommend-item" v-for="(item,index) in recommends" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommends:{
      type:Array,
      default:[]
    }
  }
};
</script>

<style>
#recommend{
  display: flex;
  border-bottom: 2px solid #ccc;
  padding-bottom: 20px;
}
.recommend-item{
  flex: 1;
  text-align: center;
}
.recommend-item img{
  width: 50px;
}
</style>