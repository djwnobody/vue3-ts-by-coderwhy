const path = require('path')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/, //正则表达式
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ],
      },










      
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      // {
      //   test: /\.(less|css)$/,
      //   use: [
      //     "style-loader",
      //     "css-loader",
      //     "less-loader"
      //   ]
      // }
    ],
  },
}
