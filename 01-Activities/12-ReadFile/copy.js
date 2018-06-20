var fs = require("fs");

// destination.txt will be created or overwritten by default.
fs.copyFile("movies.txt", "../01-HelloNode/movies.txt", function (err) {
    if (err) {
        console.log(err);
    } else {
    console.log("source.txt was copied to new destination");
    };
});