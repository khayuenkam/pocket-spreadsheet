exports.cluster = { 
  size: require('os').cpus().length
}

//bunyan config
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


