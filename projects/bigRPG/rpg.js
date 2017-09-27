var figlet = require("figlet");
console.log(figlet.textSync(' RPG 2.0', {
    font: 'Colossal',
    horizontalLayout: 'default',
    verticalLayout: 'default'
}));

console.log("                      really cool awesome rpg game 2.0!");
console.log("                 You are about to embark on a serious adventure,                               one that will define you for the rest of your life.\n         Though poor circumstances seem to follow everything you do,\n                   Now is the time to change your destiny.\n                        Become the hero you really are.\n\n            Like every journey, this one must begin with a single step...\n††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††")

console.log("\n You find yourself in a small cabin, there is a fire burning, some scraps of\n food on the table and a dog chewing a bone in the corner.")
var readline = require("readline-sync");

var room = readline.question("What do you want to do?");
while(room !== "look") {
    console.log("You see a door to the outside, you hear the wind howling");
    walking = readline.question("It's cozy in here, there's a storm outside ");
    
    if (room !== "look") {
        break;
    }
    
    console.log("There's not much to do in here.");
    console.log("");
}

console.log("What now?");