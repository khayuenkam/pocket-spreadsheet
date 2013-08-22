var config = require('./config.js')
, worker = require.resolve('./worker.js')
, clusterMaster = require('cluster-master')
, clusterConf = config.cluster || {}
, clusterConf.exec = worker;

process.stdout.on('error', function (er) {
  if (er.code === 'EPIPE') return;
  throw er;
}

config.log.master = true;
var logger = require('bunyan').createLogger(config.log);

console.error = logger.warn.bind(logger);
console.log = logger.info.bind(logger);

clusterMaster(clusterConf);
