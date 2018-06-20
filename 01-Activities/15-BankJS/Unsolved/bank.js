var fs = require("fs");

var input = process.argv;
var action = input[2];
var amount = parseFloat(input[3]);
var winnings = Math.floor((Math.random() * 1000) + 1000);

function balance() {
    fs.readFile("bank.txt", "utf8", function (err, data) {
        if (err) {
            return console.log(err);
        } else {
            var balance = 0;
            var money = data.split(",")

            for (var i = 0; i < money.length; i++) {
                if (parseFloat(money[i])) {
                    balance += parseFloat(money[i]);
                };
            };

            console.log("You have a total balance of: $" + balance.toFixed(2));
        };
    });
};



function deposit() {
    fs.appendFile("bank.txt", ", " + amount, function (err) {
        if (err) {
            return console.log(err);
        } else {
            console.log("Your deposit of $" + amount + " is complete");
        };
    });
};



function withdraw() {
    fs.appendFile("bank.txt", ", -" + amount, function (err) {
        if (err) {
            return console.log(err);
        } else {
            console.log("Your withdrawal of $" + amount + " is complete.");
        };
    });
};



function lotto() {
    fs.appendFile("bank.txt", ", -2.50", function (err) {
        if (err) {
            return console.log(err);
        } else {

            var chance = Math.floor((Math.random() * 10) + 1);

            if (chance === 1) {
                fs.appendFile("bank.txt", ", " + winnings, function (err) {
                    if (err) {
                        return console.log(err);
                    } else {
                        console.log("Congratulations, you won the lottery! Your total winnings: $" + winnings);
                    };
                });
            } else {
                console.log("You're not a winner today. Better luck next time!");
            };
        };
    });
};



switch (action) {
    case "balance":
        balance();
        break;
    case "deposit":
        deposit();
        break;
    case "withdraw":
        withdraw();
        break;
    case "lotto":
        lotto();
        break;
    default:
        console.log("Command not recognized");
};