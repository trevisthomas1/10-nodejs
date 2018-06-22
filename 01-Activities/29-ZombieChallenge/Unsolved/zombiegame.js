// INSTRUCTIONS: Build a command-line based zombie fighting game. 
// =========================================================================================================

// In this game, you and a zombie will each be given a certain amount of health. (Perhaps: You 70, Zombie 15).

// For each round, you will be asked to guess a random number between 1 and 5.
// If your guess matches the random number of the Zombie -- you inflict a random amount of damage between 1 and 5. 
// If you guess does not match the random number of the Zombie -- the Zombie inflicts a random amount of damage to you between 1 and 5.
// Each round the zombie is given a new random number and you must guess again. 

// The game ends when you or the zombie gets to 0 health. 

// Note: You should use the inquirer package to take in user commands.
// Major Warning: inquirer's prompt function is "asynchronous", which means that the majority of your game logic will need to be inside the .then() function for your prompt. 

// ===========================================================================================================

var inquirer = require("inquirer");

var player = 70;
var zombie = 15;

function newRound() {
    inquirer.prompt([
        {
            type: "input",
            message: "Pick a number between 1 and 5",
            name: "input",
            validate: function (input) {
                var value = parseInt(input);
                if (value && value > 0 && value < 6) {
                    return true
                }

                return "Invalid input"
            }
        }
    ]).then(function (response) {
        var zombiePick = Math.ceil(Math.random() * 5);
        var value = parseInt(response.input);
        var damage = Math.ceil(Math.random() * 5);
        if (value == zombiePick) {
            console.log("You hurt the zombie for " + damage);
            zombie -= damage;
            if (zombie < 0) {
                zombie = 0;
            }

            console.log("The zombie has " + zombie + " hp left");
        } else {
            console.log("The zombie hurt you for " + damage);
            player -= damage;
            if (player < 0) {
                player = 0;
            }

            console.log("You have " + player + " hp left");
        }

        if (player <= 0) {
            console.log("You died!");
        } else if (zombie <= 0) {
            console.log("You defeated the zombie!");
        } else {
            newRound();
        }
    })
}

newRound();