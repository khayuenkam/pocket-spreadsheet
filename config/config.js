exports.cluster = { 
  size: require('os').cpus().length
};

exports.google_spreadsheet_config = {
  username: process.env.GOOGLE_USERNAME || "123456@gmail.com",
  password: process.env.GOOGLE_PASSWORD || "123456",
  spreadsheet_key: "0AkD-Fj1A1_pmdDdsdkZPd3BjWWE1d3BmLUZBS2NySFE"
};

exports.pocket_config = {
  consumer_key: process.env.POCKET_CONSUMER_KEY || "123456",
  access_token: "8f955ba8-f15b-31d1-7c40-079066"
};

exports.log = {
  name: 'pocket-spreadsheet',
  level: 'trace'
};

var env = process.env.NODE_ENV;
var admin;

if (env === 'production') {
  admin = require('./config.admin.js');
} else try {
  if (env !== 'dev') {
    admin = require('./config.admin.js');
  } else {
    admin = require('./config.dev.js');
  }
} catch (er) {
  console.error("No admin configurations for production");
  admin = {};
}


