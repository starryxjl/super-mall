/*
 * @Author: your name
 * @Date: 2020-06-14 09:34:54
 * @LastEditTime: 2020-06-19 10:14:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myNotes\project\supermall\src\network\request.js
 */ 
import axios from 'axios'
export function request(config){
  const instance1 = axios.create({
    baseURL:'',
    timout:5000
  })
  
  // 请求拦截
  // instance1.interceptors.request.use(config=>{
  //   console.log(config);
  //   return config
  // },err=>{
  //   console.log(err);
  // })

  // 响应拦截
  instance1.interceptors.response.use(res=>{
    // console.log(res.data);
    return res.data
  },err=>{
    console.log(err);
    
  })
// 网络请求代码，结果返回的是一个Promise
  return instance1(config)
  
}