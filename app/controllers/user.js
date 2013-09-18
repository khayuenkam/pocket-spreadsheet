
/*
 * GET users listing.
 */

var cs = require('coffee-script');
var Pocket = require('node-pocket');
var config = require('../../config/config');
var pConfig = config.pocket_config;

exports.list = function(req, res){
  res.send("respond with a resource");
};
