var _ = require('underscore');
var metadata = require('cloud/metadata.js');
var publicAPI = require('cloud/publicAPI.js');

// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("hello", function(request, response) {
  response.success("Hello world!");
});

// Use Parse.Cloud.define to define as many cloud functions as you want.
Parse.Cloud.define("searchFoursquareByLocation", function(request, response) {
  publicAPI.searchFoursquareByLocation(request, response);
});

Parse.Cloud.define("getAndSaveCategories", function(request, response) {
  metadata.getAndSaveCategories(request, response);
});
