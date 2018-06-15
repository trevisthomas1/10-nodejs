// Gets the myBands object from the bands file.
var bandList = require("./bands.js");

// Loop through band list and print out details
for (var genre in bandList) {
    console.log("A " + genre + " band is " + bandList[genre] + ".");
}