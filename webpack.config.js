const path = require("path")

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
        test:/\.css$/,
        //useのloaderは逆順に実行される為、記載する順番に注意
        use:[
        "style-loader",
        "css-loader",
        ]
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
        test:/\.scss$/,
        //useのloaderは逆順に実行される為、記載する順番に注意
        use:[
        "style-loader",
        "css-loader",
        "sass-loader"
        ]
      },
    ]
  },
  devServer :{
    contentBase: outputPath
  }
}