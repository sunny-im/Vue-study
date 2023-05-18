const { VueLoaderPlugin } = require('vue-loader');
// const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'eval',
  // mode: 'production',
  // devtool: 'hidden-source-map',
  resolve: {
    //확장자 처리 => import 할때 확장자 안넣어도 됨
    extensions: ['.js',',vue']
  },
  entry: {
    app: './main.js', // 핵심파일
  },
  module: {
    rules: [{
      // webpack은 기본적으로 javascript만 읽으므로 파일명이 .vue로 끝나는 파일도 읽을 수 있도록 정규식+vue파일을 읽을 수 있는 loader 설치 및 명시
      test: /\.vue$/,
      loader: 'vue-loader',
    }],
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
  output: {
    filename: 'app.js', // 최종 결과물
    // path: './dist', // 폴더 경로(절대경로))
    // 현재경로는(__dirname) , 디렉토리 이름
    path: path.join(__dirname, 'dist'),
  },
};