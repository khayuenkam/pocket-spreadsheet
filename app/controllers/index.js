/*
 * GET home page.
 */

var cs = require('coffee-script');
var Q = require('q');
var Pocket = require('node-pocket');
var GoogleSpreadsheet = require('google-spreadsheet');
var config = require('../../config/config');
var pConfig = config.pocket_config;
var gConfig = config.google_spreadsheet_config;

var sheet = new GoogleSpreadsheet(gConfig.spreadsheet_key);
//var p = new Pocket(pConfig.consumer_key, pConfig.access_token);

exports.index = function(req, res){

  var pGet = Q.nbind(p.get, p)
    , setAuth = Q.nbind(sheet.setAuth, sheet)
    , getInfo = Q.nbind(sheet.getInfo, sheet);

  setAuth(gConfig.username, gConfig.password)
    .then(function() {
      var sheetInfo = getInfo()
        , pocketData = pGet({
            state: 'all',
            sort: 'sortest',
            count: 10 
          });

      return Q.all(sheetInfo, pocketData);

    })
    .then(function(sheetInfo, pocketData) {
      console.log(sheetInfo);
      console.log(pocketData);
    });

  res.render('index', { title: 'Express' });
};
