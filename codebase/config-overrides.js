const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function override(config, env) {
  // Add the CopyWebpackPlugin to copy the background.js file
  config.plugins.push(
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'src/background.js',
          to: 'static/js',
        },
      ],
    })
  );

  return config;
};
