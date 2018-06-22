// Instructions: 
// Build a Node application that takes in a location input via the command line, then geocodes it using the geocoder NPM package.
// Then console.log the geocoding information for display.

// Easier: User will provide the city and state in the following format: "Atlanta, GA", "Houston, TX"
// Slightly More Challenging: User will provide the address in any format: "151 Sip Ave Jersey City, NJ", "Austin, TX", etc.

// All: Be sure to console log the output using JSON.stringify in "pretty-print" format. 

// ========================================================================================================================

// Include the geocoder NPM package (Remember to run "npm install geocoder"!)


var geocoder = require("geocoder");

var nodeArg = process.argv;
var myAddress = nodeArg[2];

geocoder.geocode(myAddress, function (err, result) {

    if (err) {
        console.log(err);
    }
    console.log(JSON.stringify(result, null, 2));
});

//To manage for full address:
// var geocoder = require("geocoder");
// var input = process.argv.slice(2).join(" ");
// console.log("Input: " + input);
// geocoder.geocode(input, function ( err, data ) {
//   if (err) {
//     console.log("Error: " + err)
//     return
//   }

//   console.log(JSON.stringify(data, null, 2));
// });