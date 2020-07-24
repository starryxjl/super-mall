<!--
 * @Author: your name
 * @Date: 2020-06-20 17:03:42
 * @LastEditTime: 2020-06-26 23:24:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myNotes\project\supermall\src\components\content\tabControl\TabControl.vue
--> 
<template>
  <div class="tab-control">
    <div
      class="tab-control-item"
      @click="itemClick(index)"
      v-for="(item,index) in titles"
      :key="index"
      :class="{active:index===curIndex}"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titles: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      curIndex: 0
    };
  },
  methods: {
    itemClick(index) {
      this.curIndex = index;
      this.$emit('itemClick',index)
    }
  }
};
</script>

<style>
.tab-control {
  display: flex;
  text-align: center;
  height: 44px;
  line-height: 44px;
  background: #fff;
  font-size: 15px;
  z-index: 9;
}
.tab-control-item {
  flex: 1;
}
.active span {
  border-bottom: 2px solid var(--color-high-text);
  padding: 5px;
  color: var(--color-high-text);
}
</style>