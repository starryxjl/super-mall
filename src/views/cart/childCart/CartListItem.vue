<!--
 * @Author: your name
 * @Date: 2020-07-03 22:47:49
 * @LastEditTime: 2020-07-13 21:54:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myNotes\project\supermall\src\views\cart\childCart\CartLIstItem.vue
--> 
<template>
  <div class="good-item">
    <div class="check-button">
      <check-button :isCheck="good.check" @changeCheck="changeClick"></check-button>
    </div>
    <div class="image">
      <img :src="good.image" />
    </div>
    <div class="info">
      <div class="title">{{good.title}}</div>
      <div class="desc">{{good.desc}}</div>
      <div class="bottom">
        <div class="left">￥{{good.price}}</div>
        <div class="right">X{{good.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from "content/checkButton/CheckButton";
export default {
  props: {
    good: {
      type: Object,
      default: {}
    }
  },
  components: {
    CheckButton
  },
  methods: {
    changeClick() {
      this.good.check = !this.good.check;
    }
  }
};
</script>

<style scoped>
.good-item {
  display: flex;
  padding: 5px;
  border-bottom: 1px solid #ccc;
}
.check-button {
  display: flex;
  align-items: center;
  padding: 3px;
}
.image img {
  width: 80px;
  height: 100px;
}
.info {
  font-size: 17px;
  color: #333;
  padding: 5px;
  /* position: relative; */
  overflow: hidden;
}
.info .title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.info .desc {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  color: #666;
  margin-top: 15px;
}
.bottom {
  font-size: 14px;
  color: #666;
  margin-top: 15px;
}
.bottom div:first-child {
  color: orangered;
}
</style>