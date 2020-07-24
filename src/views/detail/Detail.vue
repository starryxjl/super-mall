<!--
 * @Author: your name
 * @Date: 2020-06-27 08:59:24
 * @LastEditTime: 2020-07-24 19:16:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myNotes\project\supermall\src\views\detail\detail.vue
--> 
<template>
  <div id="detail">
    <detail-nav-bar @itemClick="getThemeTopY" ref="navBar"></detail-nav-bar>
    <Scroll class="detail-content" ref="scroll" :probeType="3" @scroll="scrollPos">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detailInfo="detailInfo" @detailRefresh="detailRefresh"></detail-goods-info>
      <detail-param-info :paramInfo="goodsParam" ref="param"></detail-param-info>
      <detail-comment-info :commentInfo="commentInfo" ref="comment"></detail-comment-info>
      <goods-lists :goods="recommendList" ref="recommend"></goods-lists>
    </Scroll>
    <detail-tabBar @addToCart="addToCart"></detail-tabBar>
    <BackTop @click.native="backTop" v-show="isShowTop" />
  </div>
</template>

<script>
import {
  getDetail,
  getRecommend,
  Goods,
  Shop,
  GoodsParam
} from "network/detail";

import { itemListenerMixin } from "@/common/mixin";
import { debounce } from "@/common/utils";

import DetailNavBar from "./childDetails/DetailNavBar";
import DetailSwiper from "./childDetails/DetailSwiper";
import DetailBaseInfo from "./childDetails/DetailBaseInfo";
import DetailShopInfo from "./childDetails/DetailShopInfo";
import DetailGoodsInfo from "./childDetails/DetailGoodsInfo";
import DetailParamInfo from "./childDetails/DetailParamInfo";
import DetailCommentInfo from "./childDetails/DetailCommentInfo";
import DetailTabBar from './childDetails/DetailTabBar'

import GoodsLists from "content/goodsLists/GoodsLists";

import Scroll from "common/scroll/Scroll";

import {backTop} from '@/common/mixin'

export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      goodsParam: {},
      commentInfo: {},
      recommendList: [],
      themeTopYs: [],
      index: 0
    };
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsLists,
    DetailTabBar,
    Scroll
  },
  mixins: [itemListenerMixin],
  created() {
    this.iid = this.$route.query.iid;
    getDetail(this.iid).then(res => {
      console.log(res);
      const data = res.result;
      // 1.获取轮播图图片数据
      this.topImages = data.itemInfo.topImages;
      // 2.获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      // 3.获取店铺信息
      this.shop = new Shop(data.shopInfo);
      // 4.获取商品详情信息
      this.detailInfo = data.detailInfo;
      // 5.获得商品参数
      this.goodsParam = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      // 6.获取评论信息
      if (data.rate.list) {
        this.commentInfo = data.rate.list[0];
      } 

      // this.$nextTick(()=>{
      // 根据最新的数据，对应的DOM已经被渲染出来了，但是图片依然没有加载完（目前获取到的offsetTop不包含其中的图片）
      // offsetTop值不对的时候，都是因为图片问题

      //   this.themeTopYs = []

      //   this.themeTopYs.push(0)
      //   this.themeTopYs.push(this.$refs.param.$el.offsetTop)
      //   this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
      //   this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
      //   console.log(this.themeTopYs);

      // })
    });
    // 7.获得推荐商品
    getRecommend().then(res => {
      console.log(res);
      this.recommendList = res.data.list;
    });
  },
  destoryed() {
    console.log("销毁了一个详情");
    this.$eventBus.$off("itemImageLoad", this.itemImgListener);
  },
  methods: {
    detailRefresh() {
      this.$refs.scroll.refresh();
      // 获取nav-bar标题对应的组件offsetTop
      this.themeTopYs = [];
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.param.$el.offsetTop);
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
      this.themeTopYs.push(Number.MAX_VALUE)
      console.log(this.themeTopYs);
    },
    getThemeTopY(index) {
      console.log(index);
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index]);
    },
    // 监听scroll滚动距离
    scrollPos(position) {
      let n = this.themeTopYs.length;
      // console.log(position);

      // 1.普通方法
      // for (var i = 0;i < n;i ++) {
      //   if (
      //     (this.index !== i )&&
      //       ((i < n - 1 &&
      //         -position.y >= this.themeTopYs[i] &&
      //         -position.y < this.themeTopYs[i + 1]) ||
      //     (i === n - 1 && -position.y >= this.themeTopYs[i]))
      //   ) {
      //     this.index = i;
      //     console.log(this.index);
      //     this.$refs.navBar.curIndex = this.index;
      //   }
      // }
      
      //2. hack方法：给themeTopYs push Number.MAX_VALUE(最大的数值)
      for (var i = 0;i < n-1;i ++) {
        // 注意这里循环到倒数第二个i        
        if (
          (this.index !== i )&&
            (-position.y >= this.themeTopYs[i] &&
              -position.y < this.themeTopYs[i + 1]) 
        ) {
          this.index = i;
          console.log(this.index);
          this.$refs.navBar.curIndex = this.index;
        }
      }
       this.isShowTop = (-position.y) > 1000;
    },
    addToCart(){
      // 获取购物车需要展示的信息
      const product = {}
      product.image = this.topImages[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.nowPrice
      product.iid = this.iid
      this.$store.dispatch('addCart',product).then(data=>{
        console.log(data)
        console.log(this.$toast.show);    
        this.$toast.show(data,1500)
    })

  }},
  mixins:[backTop]
}
</script>

<style scoped>
#detail {
  height: 100vh;
  position: relative;
  z-index: 11;
  background-color: #fff;
}
.detail-content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 58px;
  left: 0;
  right: 0;
}
</style>