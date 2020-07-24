/*
 * @Author: your name
 * @Date: 2020-06-18 21:45:34
 * @LastEditTime: 2020-06-20 23:11:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myNotes\project\supermall\src\network\home.js
 */ 
// 该文件存放home页发送的网络请求
import {request} from './request'
// 请求1：获取轮播图和推荐区域数据
export function getHomeMultiData(){
  return request({
    url:'/home/multidata'
  })
}

// 请求2.获取商品数据
export function getHomeGoodsData(type,page){
  return request({
    url:'/home/data',
    params:{
      type,
      page
    }
  })
}

