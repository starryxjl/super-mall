<!--
 * @Author: your name
 * @Date: 2020-06-27 10:27:37
 * @LastEditTime: 2020-07-01 18:05:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myNotes\project\supermall\src\views\detail\childDetails\DetailNavBar.vue
--> 
<template>
  <div class="datail-nav-bar">
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" alt />
      </div>
      <div slot="center" class="titles">
          <div v-for="(item,index) in titles" 
            :key="index" 
            @click="itemClick(index)"
            :class="{active:curIndex === index}">{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "common/navbar/NavBar";
export default {
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      curIndex: 0
    };
  },
  components: {
    NavBar
  },
  methods:{
    itemClick(index){
      this.curIndex = index
      this.$emit('itemClick',index)
    },
    backClick(){
      // this.$router.go(-1)
      this.$router.back()
    }
  }
};
</script>

<style scoped>
.titles{
  display: flex;
}
.titles div{
  flex:1
}
.back img{
  margin-top:10px;
}
.active{
  color:var(--color-tint)
}
</style>