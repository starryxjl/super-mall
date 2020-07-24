/*
 * @Author: your name
 * @Date: 2020-06-25 09:49:58
 * @LastEditTime: 2020-07-03 16:33:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myNotes\project\supermall\src\common\mixin.js
 */ 
import { debounce } from "@/common/utils";

import BackTop from "content/backTop/BackTop";

export const itemListenerMixin = {
  data(){
    return {
      itemImgListener:null
    }
  },
  mounted(){
    let refresh = debounce(this.$refs.scroll.refresh,100)
    this.itemImgListener = ()=>{
      refresh()
    }
    this.$eventBus.$on('itemImageLoad',this.itemImgListener)
    console.log('我是混入的内容');
    
  }
}

export const backTop = {
  components:{
    BackTop
  },
  data(){
    return {
      isShowTop: false,
    }
  },
  methods:{
    //点击按钮回到顶部
    backTop() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    }
    
  }
}
