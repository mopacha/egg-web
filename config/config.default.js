'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1550050730466_6740';

  // add your config here
  config.view = {
    defaultViewEngine: 'ejs',
    defaultExtension: '.ejs'
  };
  // config.middleware = [];

  return config;
};