<!--
 * @Author: your name
 * @Date: 2020-07-11 22:49:59
 * @LastEditTime: 2020-07-14 10:31:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myNotes\project\supermall\src\components\content\checkButton\CheckButton.vue
--> 
<template>
    <div class="img" @click="check" :class="{check:isCheck}">
      <img src="~assets/img/cart/tick.svg" alt="">
    </div>
</template>

<script>
export default {
  name:"CheckButton",
  props:{
    isCheck:{
      type:Boolean,
      default:false
    }
  },
  methods:{
    check(){
      this.$emit('changeCheck')
    }
  }

}
</script>

<style scoped>
.img{
    position: relative;
    margin: 0;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 2px solid #ccc;
    cursor: pointer;
}  
.img img{
  width: 14px;
  height: 14px;

}

.check{
  background-color: var(--color-tint);
}
</style>