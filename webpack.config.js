const path = require('path');

module.exports = {
  entry: `${__dirname}/client/src/index.jsx`,
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          // include: __dirname + '/client/src',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
      // {
      //   test: /\.css$/,
      //   loader: "style-loader!css-loader?modules=true"
      // }
    ],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, '/client/dist'),
  },
  devServer: {
    contentBase: path.join(__dirname, '/client/dist'),
<<<<<<< Updated upstream
    port: 8080,
    proxy: {
      '/': {
        target: 'http://localhost:3000/',
      },
    },
=======
    proxy: 'http://localhost:3000',
>>>>>>> Stashed changes
  },
  resolve: { extensions: ['.js', '.jsx'] },
};

