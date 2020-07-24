<!--
 * @Author: your name
 * @Date: 2020-06-22 16:17:46
 * @LastEditTime: 2020-07-01 14:51:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myNotes\project\supermall\src\components\content\goodsList\GoodsListsItem.vue
--> 
<template>
  <div class="goods-item" @click="goodsItemClick">
    <img :src="imgUrl" @load="imageLoad" />
    <div class="dec">
      <div class="title">{{good.title}}</div>
      <span>{{good.price}}</span>
      <span class="fav">{{good.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    good: {
      type: Object,
      default: {}
    }
  },
  computed: {
    imgUrl() {
      // 推荐页和商品页图片接口不一样
      return this.good.image || this.good.show.img;
    }
  },
  methods: {
    imageLoad() {
      this.$eventBus.$emit("itemImageLoad");
    },
    goodsItemClick() {
      // 在这里实现路由跳转到详情页
      this.$router.push({
        path: "/detail",
        query: {
          iid: this.good.iid
        }
      });
    }
  }
};
</script>

<style scoped>
.goods-item {
  width: 48%;
}
.goods-item img {
  width: 100%;
  height: 270px;
  margin-bottom: 3px;
}
.goods-item .dec .title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.goods-item .dec span:first-of-type {
  font-size: 15px;
  color: var(--color-tint);
  margin-left: 30%;
  margin-right: 20px;
}
.goods-item .dec .fav {
  position: relative;
}
.goods-item .dec .fav::before {
  content: "";
  width: 14px;
  height: 14px;
  position: absolute;
  left: -15px;
  top: 2px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>