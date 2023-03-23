const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  //关闭Eslint的语法检查
  lintOnSave:false,
  css:{
    loaderOptions:{
      sass:{
        //全局引入mixin和变量
        additionalData:`
           @import "@/assets/scss/variable.scss";
           @import "@/assets/scss/mixin.scss";
        `
      }
    }
  }
})


