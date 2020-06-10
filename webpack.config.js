const path = require("path")
const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const outputPath = path.resolve(__dirname,"dist")
console.log({outputPath})
module.exports = {
  entry: "./src/index.js",
  output : {
    filename: "main.js",
    path: outputPath
  },
  module: {
    rules : [
      { 
        //testは拡張子 js or jsx
        test: /\.jsx?$/, 
        //exclude 対象を外すもの
        exclude: /node_modules/,
        //トランスパイルするloader
        loader: "babel-loader" 
      },
      {
        test: /\.(jpeg?g|png|gif|svg|ico)$/i,
        loader:"url-loader",
        options : {
          //limitのサイズを超える場合は独立したfileパスを生成する
          limit: 2048,
          name: "./images/[name].[ext]"
        }
      },
      {
        test:/\.(sc|c)ss$/,
        //useのloaderは逆順に実行される為、記載する順番に注意
        use:[
        //"style-loader",
        MiniCssExtractPlugin.loader,
        "css-loader",
        "sass-loader"
        ]
      },
      {
        test: /\.html$/,
        loader: "html-loader"
      }
    ]
  },
  devServer :{
    contentBase: outputPath
  },
  plugins: [
    new HtmlWebPackPlugin({
        //雛形htmlfile
        template: "./src/index.html",
        //出力先file
        filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css"
    })
  ]
}