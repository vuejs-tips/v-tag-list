const webpack = require.main.require('webpack')
const {name, version} = require('./package.json')

module.exports = {
  html: false,
  webpack: {
    devtool: false, // disable source-map
    output: {
      filename: `${name}.js`,
      library: camelCase(name)
    },
    plugins: [
      new webpack.DefinePlugin({
        'proccess.env.VERSION': JSON.stringify(version)
      }),
    ]
  }
}

function camelCase (s) {
  return s.replace(/(\-[a-z])|(^[a-z])/g, $1 => $1.toUpperCase().replace('-',''))
}
