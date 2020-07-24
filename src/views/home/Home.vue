<!--
 * @Author: your name
 * @Date: 2020-06-05 15:54:50
 * @LastEditTime: 2020-07-03 16:31:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myNotes\07-vue\13-路由\tabbar\src\components\tabbar\home.vue
--> 
<template>
  <div id="home">
    <nav-bar class="nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control @itemClick="tabClick" 
        :titles="['流行','新款','精选']" 
        ref="tabControl1"
        v-show="showTabControl1"
        class="fixed"></tab-control>
    <Scroll
      class="content"
      :probe-type="3"
      :pull-up-load="true"
      ref="scroll"
      @scroll="showBackTop"
      @pullingUp="pullingUp"
    >
      <home-swiper :banners="banners" :recommends="recommends" @swiperImageLoad="getOffsetTop"></home-swiper>

      <Recommend :recommends="recommends"></Recommend>

      <feature-view />

      <tab-control @itemClick="tabClick" 
        :titles="['流行','新款','精选']" 
        ref="tabControl2"></tab-control>

      <GoodsLists :goods="goods[curType].list" />
    </Scroll>
    <BackTop @click.native="backTop" v-show="isShowTop" />
  </div>
</template>

<script>
import NavBar from "common/navbar/NavBar";
import TabControl from "content/tabControl/TabControl";
import GoodsLists from "content/goodsLists/GoodsLists";

import { getHomeMultiData, getHomeGoodsData } from "network/home";

import {itemListenerMixin,backTop} from '@/common/mixin'

import Scroll from "common/scroll/Scroll";

import HomeSwiper from "./childHome/HomeSwiper";
import Recommend from "./childHome/Recommend";
import FeatureView from "./childHome/FeatureView";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    Recommend,
    FeatureView,
    TabControl,
    GoodsLists,
    Scroll,
    
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      curType: "pop",
      offsetTop:0,
      showTabControl1:false,
      scrollY:0
    };
  },
  mixins:[itemListenerMixin,backTop],
  created() {
    console.log("创建home");
    // 1.请求多个数据(注意学会这种代码组织方式)
    this.getHomeMultiData();
    // 2.请求商品数据
    this.getHomeGoodsData("pop");
    this.getHomeGoodsData("new");
    this.getHomeGoodsData("sell");
  },
 
  methods: {
    // 网络监听相关方法
    tabClick(index) {
      switch (index) {
        case 0:
          this.curType = "pop";
          break;
        case 1:
          this.curType = "new";
          break;
        case 2:
          this.curType = "sell";
          break;
      }
      // 设置两个tabcontrol同步
      this.$refs.tabControl1.curIndex = index
      this.$refs.tabControl2.curIndex = index
    },
    getOffsetTop() {
      // console.log(this.$refs.tabControl.$el.offsetParent)
      // 打印出最近的有定位的父级，此处打印结果为scroll实例
      
      // console.log(this.$refs.tabControl.$el.offsetTop);
      // 打印571
      this.offsetTop = this.$refs.tabControl2.$el.offsetTop

    },
    showBackTop(position) {
       // 1.根据监听到的滚动距离y来决定回到顶部按钮显示与否
      this.isShowTop = (-position.y) > 1000;
      // 2.决定tabControl是否吸顶
      this.showTabControl1 = (-position.y)>this.offsetTop
    },
    pullingUp() {
      console.log("上拉加载更多");
      // 网络请求数据
      this.getHomeGoodsData(this.curType);
      // finishPullUP方法结束此次上拉加载，这样就可以监听到新的上拉加载
      this.$refs.scroll.finishPullUp();
    },

    // 网络请求相关方法
    getHomeMultiData() {
      getHomeMultiData().then(
        res => {
          (this.banners = res.data.banner.list),
            (this.recommends = res.data.recommend.list);
        },
        err => {
          console.log(err);
        }
      );
    },
    getHomeGoodsData(type) {
      const page = this.goods[type].page + 1;
      getHomeGoodsData(type, page).then(
        res => {
          const arr1 = this.goods[type].list;
          const arr2 = res.data.list;
          arr1.push(...arr2);
          this.goods[type].page += 1;
          this.$refs.scroll.finishPullUp();
        },
        err => {
          console.log(err);
        }
      );
    }
  },
  activated(){
    // console.log('home活跃')
    this.$refs.scroll.scrollTo(0,this.scrollY,0)
    this.$refs.scroll.refresh()
  },
  deactivated(){
    // console.log('home不活跃')
    // 离开前获取scroll.y
    this.scrollY = this.$refs.scroll.scrollY()
    // 离开前取消商品加载事件的监听
    this.$eventBus.$off('itemImageLoad',this.itemImgListener)
  }
};
</script>

<style scoped>
#home {
  height: 100vh;
  box-sizing: border-box;
  position: relative;
}
.nav-bar {
  background-color: var(--color-tint);
  font-weight: 700;
  color: #fff;
  z-index: 9;
}
/* .tab-control {
  position: sticky;
  top: 44px;
} */
.content {
  overflow: hidden;
  /* 用定义的方式设定高度 */
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.fixed{
  position: fixed;
  top: 43px;
  left: 0;
  right: 0;
  
}
</style>