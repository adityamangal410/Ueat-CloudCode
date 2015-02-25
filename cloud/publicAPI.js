/**
 * Created by amangal on 2/23/15.
 */
var _ = require('underscore');
var moment = require('moment');

function LocData(locData) {
    var Venues = Parse.Object.extend("Venues");
    var newVenue = new Venues();

    newVenue.set("vName", locData.name);
    newVenue.set("vAddress", locData.location.formattedAddress.join());
    newVenue.set("vCategory", locData.categories[0].name);
    newVenue.set("vContact", locData.contact.formattedPhone);
    newVenue.set("vCheckinsCount", locData.stats.checkinsCount);
    newVenue.set("vUsersCount", locData.stats.usersCount);
    newVenue.set("vTipCount", locData.stats.tipCount);
    newVenue.set("vUrl", locData.url);
    newVenue.set("vLat", locData.location.lat);
    newVenue.set("vLng", locData.location.lng);
    newVenue.set("vTwitter", locData.contact.twitter);

    return newVenue;
}

function getRestaurantCategories(chunk){
    var categories;
    switch (chunk) {
        case '0140':
            categories = '4bf58dd8d48988d107941735,4bf58dd8d48988d108941735,4bf58dd8d48988d109941735,4bf58dd8d48988d10a941735,4bf58dd8d48988d10b941735,4bf58dd8d48988d10c941735,4bf58dd8d48988d10d941735,4bf58dd8d48988d10e941735,4bf58dd8d48988d10f941735,4bf58dd8d48988d110941735,4bf58dd8d48988d111941735,4bf58dd8d48988d112941735,4bf58dd8d48988d113941735,4bf58dd8d48988d115941735,4bf58dd8d48988d128941735,4bf58dd8d48988d142941735,4bf58dd8d48988d143941735,4bf58dd8d48988d144941735,4bf58dd8d48988d145941735,4bf58dd8d48988d146941735,4bf58dd8d48988d147941735,4bf58dd8d48988d148941735,4bf58dd8d48988d149941735,4bf58dd8d48988d14a941735,4bf58dd8d48988d14b941735,4bf58dd8d48988d14c941735,4bf58dd8d48988d14e941735,4bf58dd8d48988d14f941735,4bf58dd8d48988d150941735,4bf58dd8d48988d151941735,4bf58dd8d48988d152941735,4bf58dd8d48988d153941735,4bf58dd8d48988d154941735,4bf58dd8d48988d155941735,4bf58dd8d48988d156941735,4bf58dd8d48988d157941735,4bf58dd8d48988d158941735,4bf58dd8d48988d169941735,4bf58dd8d48988d16a941735,5413605de4b0ae91d18581a9';
            break;
        case '4180':
            categories = '4bf58dd8d48988d16b941735,4bf58dd8d48988d16c941735,4bf58dd8d48988d16d941735,4bf58dd8d48988d16e941735,4bf58dd8d48988d16f941735,4bf58dd8d48988d179941735,4bf58dd8d48988d17a941735,4bf58dd8d48988d1bc941735,4bf58dd8d48988d1bd941735,4bf58dd8d48988d1be941735,4bf58dd8d48988d1bf941735,4bf58dd8d48988d1c0941735,4bf58dd8d48988d1c1941735,4bf58dd8d48988d1c2941735,4bf58dd8d48988d1c3941735,4bf58dd8d48988d1c4941735,4bf58dd8d48988d1c5941735,4bf58dd8d48988d1c6941735,4bf58dd8d48988d1c7941735,4bf58dd8d48988d1c8941735,4bf58dd8d48988d1c9941735,4bf58dd8d48988d1ca941735,4bf58dd8d48988d1cb941735,4bf58dd8d48988d1cc941735,4bf58dd8d48988d1cd941735,4bf58dd8d48988d1ce941735,4bf58dd8d48988d1d0941735,4bf58dd8d48988d1d1941735,4bf58dd8d48988d1d2941735,4bf58dd8d48988d1d3941735,4bf58dd8d48988d1db931735,4bf58dd8d48988d1dc931735,4bf58dd8d48988d1dd931735,4bf58dd8d48988d1df931735,4bf58dd8d48988d1e0931735,4bf58dd8d48988d1f5931735,4c2cd86ed066bed06c3c5209,4d4ae6fc7a7b7dea34424761,4deefc054765f83613cdba6f,4def73e84765ae376e57713a';
            break;
        default :
            categories = '4e0e22f5a56208c4ea9a85a0,4eb1bd1c3b7b55596b4a748f,4eb1bfa43b7b52c0e1adc2e8,4eb1d5724b900d56c88a45fe,4edd64a0c7ddd24ca188df1a,4f04af1f2fb6e1c99f3db0bb,503288ae91d4c4b30a586d67,512e7cae91d4cbb4e5efe0af,5293a7563cf9994f4e043a44,5293a7d53cf9994f4e043a45,52960bac3cf9994f4e043ac4,52af0bd33cf9994f4e043bdd,52af39fb3cf9994f4e043be9,52e81612bcbc57f1066b79f1,52e81612bcbc57f1066b79f2,52e81612bcbc57f1066b79f3,52e81612bcbc57f1066b79f4,52e81612bcbc57f1066b79f7,52e81612bcbc57f1066b79f8,52e81612bcbc57f1066b79f9,52e81612bcbc57f1066b79fa,52e81612bcbc57f1066b79fb,52e81612bcbc57f1066b79fc,52e81612bcbc57f1066b79fd,52e81612bcbc57f1066b79fe,52e81612bcbc57f1066b79ff,52e81612bcbc57f1066b7a00,52e81612bcbc57f1066b7a01,52e81612bcbc57f1066b7a02,52e81612bcbc57f1066b7a03,52e81612bcbc57f1066b7a04,52e81612bcbc57f1066b7a05,52e81612bcbc57f1066b7a06,52e81612bcbc57f1066b7a09,52e81612bcbc57f1066b7a0a,52e81612bcbc57f1066b7a0c,52e928d0bcbc57f1066b7e96,52e928d0bcbc57f1066b7e97,52e928d0bcbc57f1066b7e98,52f2ae52bcbc57f1066b8b81';
            break;
    }

    console.log('Categories string is - ' + categories);
    return categories;
}

// Use Parse.Cloud.define to define as many cloud functions as you want.
exports.searchFoursquareByLocation = function(request, response){

    //'https://api.foursquare.com/v2/venues/search?near=' + $stateParams.location + '&radius=' + radius + '&intent=' + intent + '&categoryId=' + CATEGORY_ID +     '&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET + '&v=' + today;
    var location = request.params.location;
    var chunk = request.params.chunk;
    var locList = [];
    var categories = getRestaurantCategories(chunk);
    return Parse.Cloud.httpRequest({
        url: 'https://api.foursquare.com/v2/venues/search',
        params: {
            client_id : 'ZGXMWBZGHSGHWSCYQXLNYOEWP31N1RBKBNDZRV24E2AWDTXR',
            client_secret : 'QXCGOG0F4BILVX5JY0BNKMWIJLZJXYRVD5POZ1BZRHOZ0RLV',
            near : location,
            radius : 3000,
            intent : 'browse',
            categoryId : categories,
            v : moment().format('YYYYMMDD')
        }
    }).then(function (httpResponse) {
        var locData = JSON.parse(httpResponse.text);
        _.each(locData.response.venues, function(selectedLoc) {
            locList.push(LocData(selectedLoc));
        });

        console.log(locList.length);
        console.log('=======');
        console.log(locData.response.venues.length);

        //save all the newly created objects
        Parse.Object.saveAll(locList, {
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
    }, function(error){
        console.log(error);
    });

};
