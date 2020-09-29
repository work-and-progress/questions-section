module.exports = {
  entry: `${__dirname}/client/src/index.jsx`,
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
          },
        },
      },
    ],
  },
  output: {
    // filename: '[name].bundle.js',
    filename: 'bundle.js',
    path: `${__dirname}/client/dist`,
  },
  devServer: {
    contentBase: `${__dirname}/client/dist}`,
    port: 3000,
    // proxy: 'http://localhost:3000',
  },
};
