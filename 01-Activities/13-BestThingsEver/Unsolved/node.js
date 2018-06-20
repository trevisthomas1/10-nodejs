var fs = require("fs");

fs.readFile("best_things_ever.txt", "utf8", function (error, data) {

    if (error) {
        return console.log(error);
    }

    var bestThingsEver = data.split(",");

    for (var i = 0; i < bestThingsEver.length; i++) {
        console.log(bestThingsEver[i]);
    };

});