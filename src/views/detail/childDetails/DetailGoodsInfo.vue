<!--
 * @Author: your name
 * @Date: 2020-06-29 09:13:26
 * @LastEditTime: 2020-06-29 10:54:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myNotes\project\supermall\src\views\detail\childDetails\DetailGoodsInfo.vue
--> 
<template>
  <div class="detail-goods-info" v-if="Object.keys(detailInfo).length!==0">
    <div class="info-desc clear-fix">
      <div class="start"></div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
    <div class="info-list">
      <img
        @load="detailImageLoad"
        v-for="(item, index) in detailInfo.detailImage[0].list"
        :src="item"
        :key="index"
      />
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      count:0,
      imagesLength:0
    }
  },
  props: {
    detailInfo: {
      type: Object,
      default: {}
    }
  },
  methods: {
    detailImageLoad() {
      if (++this.count === this.imagesLength) {
        this.$emit("detailRefresh");        
      }
    }
  },
  watch:{
    // wathch的作用：当detailInfo传过来后，得到imagesLength的值
    detailInfo(){
      this.imagesLength = this.detailInfo.detailImage[0].list.length
      console.log(this.imagesLength);
      
    }
  }
};
</script>

<style scoped>
.goods-info {
  padding: 20px 0;
  border-bottom: 5px solid #f2f5f8;
}

.info-desc {
  padding: 0 15px;
}

.info-desc .start,
.info-desc .end {
  width: 90px;
  height: 1px;
  background-color: #a3a3a5;
  position: relative;
}

.info-desc .start {
  float: left;
}

.info-desc .end {
  float: right;
}

.info-desc .start::before,
.info-desc .end::after {
  content: "";
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: #333;
  bottom: 0;
}

.info-desc .end::after {
  right: 0;
}

.info-desc .desc {
  padding: 15px 0;
  font-size: 14px;
}

.info-key {
  margin: 10px 0 10px 15px;
  color: #333;
  font-size: 15px;
}

.info-list img {
  width: 100%;
}
</style>