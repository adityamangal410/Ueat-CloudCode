/**
 * Created by amangal on 2/21/15.
 */
var _ = require('underscore');
var moment = require('moment');

exports.getAndSaveCategories = function (request, response) {
    //https://api.foursquare.com/v2/venues/categories?oauth_token=EJ5FUSFNIDWYZOEFAJCRRGP2W435TEOVGVWYI4OUJQC1VAJG&v=20150221
    return Parse.Cloud.httpRequest({
        url: 'https://api.foursquare.com/v2/venues/categories',
        params: {
            client_id : 'ZGXMWBZGHSGHWSCYQXLNYOEWP31N1RBKBNDZRV24E2AWDTXR',
            client_secret : 'QXCGOG0F4BILVX5JY0BNKMWIJLZJXYRVD5POZ1BZRHOZ0RLV',
            v : moment().format('YYYYMMDD')
        }
    }).then(function (httpResponse) {
        var categoryData = JSON.parse(httpResponse.text);
        var categoryList = [];
        var foodList = _.find(categoryData.response.categories, function(cat){
           if (cat.name === 'Food'){
               return cat;
           }
        });

        var CategoryValue = Parse.Object.extend("CategoryList");

        _.each(foodList.categories, function(selectedCategory) {
            //categoryList.push(new CategoryData(selectedCategory));
            var newCategory = new CategoryValue();
            newCategory.set("categoryId", selectedCategory.id);
            newCategory.set("categoryName", selectedCategory.name);
            categoryList.push(newCategory);
        });

        // save all the newly created objects
        Parse.Object.saveAll(categoryList, {
            success: function() {
                // objects have been saved...
                console.log('All objects saved!');
            },
            error: function(error) {
                // an error occurred...
                console.log(error);
            }
        });
        response.success();
    });
};

//function getConfig() {
//
//    Parse.Config.get().then(function(config) {
//        console.log("Yay! Config was fetched from the server.");
//        var configData = Object.create(null);
//        configData.foursquareClientID = config.get("FoursquareClientID");
//        configData.foursquareClientSecret = config.get("FoursquareClientSecret");
//        console.log(configData);
//        return configData;
//    }, function(error) {
//        console.log("Failed to fetch. Using Cached Config.");
//        var configData = Object.create(null);
//        var config = Parse.Config.current();
//        configData.foursquareClientID = config.get("FoursquareClientID");
//        configData.foursquareClientSecret = config.get("FoursquareClientSecret");
//        console.log(configData);
//        return configData;
//    });
//}