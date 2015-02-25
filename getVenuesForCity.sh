#!/bin/sh

NEAR=$1;
echo $NEAR;

curl -X POST   -H "X-Parse-Application-Id: qL1dW1JQ8ScToEgtz5pnkYlCQEoHxtEKTwIDJc56"   -H "X-Parse-REST-API-Key: 8xuedtWxaEoy9beCGvoJ0Ogtptvm3ATZGITYbaXn"   -H "Content-Type: application/json"   -d "{\"location\":\"$NEAR\", \"chunk\":\"\"}"   https://api.parse.com/1/functions/searchFoursquareByLocation;
curl -X POST   -H "X-Parse-Application-Id: qL1dW1JQ8ScToEgtz5pnkYlCQEoHxtEKTwIDJc56"   -H "X-Parse-REST-API-Key: 8xuedtWxaEoy9beCGvoJ0Ogtptvm3ATZGITYbaXn"   -H "Content-Type: application/json"   -d "{\"location\":\"$NEAR\", \"chunk\":\"0140\"}"   https://api.parse.com/1/functions/searchFoursquareByLocation;
curl -X POST   -H "X-Parse-Application-Id: qL1dW1JQ8ScToEgtz5pnkYlCQEoHxtEKTwIDJc56"   -H "X-Parse-REST-API-Key: 8xuedtWxaEoy9beCGvoJ0Ogtptvm3ATZGITYbaXn"   -H "Content-Type: application/json"   -d "{\"location\":\"$NEAR\", \"chunk\":\"4180\"}"   https://api.parse.com/1/functions/searchFoursquareByLocation;

