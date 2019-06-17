const path = require('path')

const resolve = dir => path.join(__dirname, dir)

const BASE_URL = process.env.NODE_ENV === 'procution' ? '/' : '/'

module.exports = {
  lintOnSave: false,
  baseUrl: BASE_URL,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('style', resolve('src/assets/style'))
      .set('_c', resolve('src/components'))
  },
  // 打包时不生成map文件
  procutionSourceMap: false,
  devServer: {
    proxy: 'http://localhost:8000'
  }
}
