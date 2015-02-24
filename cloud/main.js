var _ = require('underscore');
var moment = require('moment');
var metadata = require('cloud/metadata.js');

// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("hello", function(request, response) {
  response.success("Hello world!");
});

function LocData(locData) {
  this.name = locData.name;
  this.vaddress = locData.location.formattedAddress;
}

// Use Parse.Cloud.define to define as many cloud functions as you want.
Parse.Cloud.define("foursquare", function(request, response) {

//https://api.foursquare.com/v2/venues/search?ll=40.7,-74&client_id=ZGXMWBZGHSGHWSCYQXLNYOEWP31N1RBKBNDZRV24E2AWDTXR&client_secret=QXCGOG0F4BILVX5JY0BNKMWIJLZJXYRVD5POZ1BZRHOZ0RLV&v=20150219

return Parse.Cloud.httpRequest({
  url: 'https://api.foursquare.com/v2/venues/search',
  params: {
    ll : '40.7,-74',
    client_id : 'ZGXMWBZGHSGHWSCYQXLNYOEWP31N1RBKBNDZRV24E2AWDTXR',
    client_secret : 'QXCGOG0F4BILVX5JY0BNKMWIJLZJXYRVD5POZ1BZRHOZ0RLV',
    v : '20150219'
  }
}).then(function (httpResponse) {
//    response.success(httpResponse.text);
  var locData = JSON.parse(httpResponse.text);
  var locList = [];
  _.each(locData.response.venues, function(selectedLoc) {
    locList.push(new LocData(selectedLoc));
  });
  response.success(locList);

});

});

Parse.Cloud.define("getAndSaveCategories", function(request, response) {
  metadata.getAndSaveCategories(request, response);
});
