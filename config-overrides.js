const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

  module.exports = function override(config, env) {
    config = injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config);  // change importing css to less
    config = rewireLess(config, env, {
      modifyVars: { 
      	"@primary-color": "#14b96b", //nav highlight
      	"@info-color": "#14b96b"
      	// "@normal-color": "#fff",
      	// "@layout-header-background": "#f2f2f2"
       },
    });
    return config;
  };