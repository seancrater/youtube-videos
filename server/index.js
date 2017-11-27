const path = require('path');
const webpack = require('webpack');
const express = require('express');
const config = (process.env.NODE_ENV === 'prod') ? require('../webpack.config.production') : require('../webpack.config');

var app = express();
var compiler = webpack(config);
const port = process.env.NODE_ENV === 'prod' ? 80 : 3000;

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    return console.error(err);
  }

  console.log('Listening at http://localhost:3000/');
});
