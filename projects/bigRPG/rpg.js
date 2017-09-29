var figlet = require("figlet");
console.log(figlet.textSync(' RPG 2.0', {
    font: 'Colossal',
    horizontalLayout: 'default',
    verticalLayout: 'default'
}));

console.log("                      really cool awesome rpg game 2.0!");
console.log("                 You are about to embark on a serious adventure,                               one that will define you for the rest of your life.\n         Though poor circumstances seem to follow everything you do,\n                   Now is the time to change your destiny.\n                        Become the hero you really are.\n\n            Like every journey, this one must begin with a single step...\n††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††")


console.log("\n You find yourself in a small cabin, there is a fire burning, some scraps of\n food on the table and a dog chewing a bone in the corner.\n")



var readline = require("readline-sync");
let player = {
    health: 100,
    inventory: [],
    dead = false
}

var Game = new function(stats, [inventory], dead, damage) {
    stats = "Health",
    inventory = ["inventory"],
    dead = "You are dead"
    damage = "attack"
}

Game.prototype.playScene = function() {
    return this.stats
}
var room = readline.question("What do you want to do? ");
while (room !== "look") {
    console.log("You see a door to the outside, you hear the wind howling");
    walking = readline.question("It's cozy in here, there's a storm outside ");

    if (room !== "look") {
        break;
    }

    console.log("There's not much to do in here.");
    console.log("");
}

console.log("What now?");

//multiple selections after single choice
//ability to take item in room (knife)
//ability to see command options
//change the objects in room after player interaction
//ability to take damage from actions (dog)
//declaration of stats, inventory
//ability to look at inventory
//ability to exit room
// -concepts to use-
//while loop for options
//if, else for options within while loop
//for loop for statistics
//map for calling arrays
//higher order functions
//constructor functions
//separate file for inventory
//separate file for player health

var readline = require("readline-sync");


var room = readline.question("What do you want to do?");
while (room !== "look") {
    console.log("You see a door to the outside, you hear the wind howling");
    walking = readline.question("It's cozy in here, there's a storm outside ");

    if (room !== "look") {
        break;
    }

    console.log("There's not much to do in here.");
    console.log("");
}

console.log("What now?");

//list of possible commands
//ability to interact with people (drunk homeless guy)
//ability to access map from homeless guy
//ability to to travel
//first enemy battle (drunk baby)
//enemy stats
//dropped items
//health regeneration
//ability to equip items from inventory
// -concepts to use-
//constructor functions for enemy and inventory
//while loop, for loop, if/else for traveling
//while loop, for loop, map, math, if/else for fighting
//while loop, for loop, if/else, ? for health
//while loop , for loop, if/else, ? for damage
//--
//marsh/mountain
//elemental damage from water(marsh) or fire(mountain)
//fight 2 enemies (bog dudes or skeleton guys)
//discover secret armor in marsh, or advanced weapon in mountain
//discover portal
//--
//final boss in portal plane (massive conglomerate of drunk babies)
