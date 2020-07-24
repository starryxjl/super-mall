<!--
 * @Author: your name
 * @Date: 2020-06-22 16:17:02
 * @LastEditTime: 2020-06-22 21:18:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myNotes\project\supermall\src\components\content\goodsList\GoodsLists.vue
--> 
<template>
  <div class="goods-lists">
    <GoodsListsItem v-for="(item,index) in goods" :key="index" :good="item"></GoodsListsItem>
  </div>
</template>

<script>
import GoodsListsItem from './GoodsListsItem'
export default {
  components:{
    GoodsListsItem
  },
  props:{
    goods:{
      type:Array,
      default:[]
    }
  }
}
</script>

<style>
.goods-lists{
  display: flex;
  flex-wrap: wrap;
  justify-content:space-around;

}
</style>