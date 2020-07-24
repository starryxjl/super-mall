/*
 * @Author: your name
 * @Date: 2020-06-14 10:25:22
 * @LastEditTime: 2020-07-24 21:02:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myNotes\project\supermall\vue.config.js
 */ 
module.exports = {
  // publicPath:'',        
  configureWebpack: {
    resolve: {
      alias: {
        'components': '@/components',
        'content': 'components/content',
        'common': 'components/common',
        'assets': '@/assets',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}