
module.exports = {
  devServer: {
    proxy: {
      '/back': {
        //代理api
        target: 'http://127.0.0.1:8000', // 代理接口(注意只要域名就够了)
        changeOrigin: true, //是否跨域
        // ws: true, // proxy websockets
        pathRewrite: {
          //重写路径
          '^/back': '/back' //代理路径
        }
      }
    }
  }
};
    


// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   devServer:{
//       // host: '127.0.0.1', // 本地地址
//       // port: 8080, // 端口号
//       // open: true, // 配置项目在启动时自动在浏览器打开
//       proxy: {
//         '/back': {
//           target: 'http://127.0.0.1:8000/',// 后端接口
//           changeOrigin: true, // 是否跨域
//           ws: true,
//           pathRewrite: {
//             '^/back': ''
//           }
//         }
//       }
//     },

//   //   proxy: {                 //设置代理，必须填
//   //     '/api': {              //设置拦截器  拦截器格式   斜杠+拦截器名字，名字可以自己定
//   //       target: 'http://192.168.43.169:5000/',     //代理的目标地址
//   //       changeOrigin: true,              //是否设置同源，输入是的
//   //       pathRewrite: {                   //路径重写
//   //         '^/api': ''                     //选择忽略拦截器里面的内容
//   //       }
//   //     },
//   // }
//   lintOnSave:false,
//   transpileDependencies: true,
// })
// module.exports = {
//   devServer: {
//       port: 8080,     // 端口
//   },
//   lintOnSave: false   // 取消 eslint 验证
// };