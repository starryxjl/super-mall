<!--
 * @Author: your name
 * @Date: 2020-07-21 09:48:19
 * @LastEditTime: 2020-07-24 17:14:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myNotes\project\supermall\src\components\common\toast\Toast.vue
--> 
<template>
  <div class="text" v-show="isShow">
    <div>{{text}}</div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {
      text: "",
      isShow: false
    };
  },
  methods: {
    show(text, duration) {
      this.isShow = true;
      this.text = text;
      setTimeout(() => {
        this.isShow = false;
        this.text = "";
      }, duration);
    }
  }
};
</script>

<style scoped>
.text {
  position: fixed;
  z-index: 999;
  top: 50%;
  left: 50%;
  padding: 10px;
  transform: translate(-50%, -50%);
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>