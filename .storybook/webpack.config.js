const defaultConfig = require('@open-wc/demoing-storybook/default-storybook-webpack-config.js');

module.exports = ( { config } ) => {
  config.module.rules.push( {
    test: /\.hvml$/i,
    use: 'raw-loader',
  } );

  return defaultConfig( {
    config,
    transpilePackages: [
      'lit-html',
      'lit-element',
      '@open-wc'
    ],
  } );
};
