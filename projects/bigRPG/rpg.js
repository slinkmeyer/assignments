var figlet = require("figlet");
console.log(figlet.textSync(' RPG 2.0', {
    font: 'Colossal',
    horizontalLayout: 'default',
    verticalLayout: 'default'
}));

console.log("                      really cool awesome rpg game 2.0!");
console.log("                 You are about to embark on a serious adventure,                               one that will define you for the rest of your life.\n         Though poor circumstances seem to follow everything you do,\n                   Now is the time to change your destiny.\n                        Become the hero you really are.\n\n            Like every journey, this one must begin with a single step...\n††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††")


console.log("\n You find yourself in a small cabin, there is a fire burning, some scraps of\n food on the table and a dog chewing a bone in the corner.\n")

const readlineFirst = require("readline-sync");
const readlineSecond = require("readline-sync");
let inventory = ["Your inventory is empty"];
let name = readlineFirst.question("First, You'll need a name... ");
console.log("Welcome " + name + ". You sound like a true warrior!");

readlineSecond.setDefaultOptions({
    limit: ["look", "help", "quit"]
});
a1 = readlineSecond.question('I am your oracle, try typing something and I\'ll guide you there.  ', {
    trueValue: readlineSecond["help", "look"],
    falseValue: readlineSecond["quit"]
});

if (a1 === "help") {
    console.log("There's probably something you can use here...");
} else if (a1 === "look") {
    console.log("There's a knife on the table, and a coat by the door.");
} else {
    return false;
}

a2 = readlineSecond.question("What would you like to do now? ", {
    limit: ["take knife", "pet dog", "kick dog", "take coat", "check inventory", "leave house", "sleep in bed"]
});

if (a2 === "take knife") {
    console.log("Hardly a knife, this thing is made for butter, and it's not even good at that.\n");
    inventory.pop(0);
    inventory.push("'Knife' ");
    console.log(inventory + "has just been added to your inventory.");
} else if (a2 === "pet dog") {
    console.log("G O O D  B O Y E");
    inventory.pop(0);
    inventory.push("'doggo '");
    console.log(inventory + "has been added to your inventory.")
} else if (a2 === "cats") {
    return false;
} else if (a2 === "check inventory") {
    console.log(inventory);
} else if (a2 === "take coat") {
    console.log("welp, you\'re smart enough not to die of hypothermia.");
    inventory.pop(0);
    inventory.push("'coat '");
    console.log(inventory + "has just been added to your inventory.")
} else if (a2 === "leave house") {
    console.log("it's raining really hard, that's probably not a good idea yet.")
} else if (a2 === "sleep in bed") {
    console.log("I probably shouldn't tell you this... but the world will be over by the time you wake up, bad call.")
} else if (a2 === "kick dog") {
    console.log("well aren't you F#$%&\'d up...")
    let fight = function() {
        
    }
};

a3 = readlineSecond.question("What would you like to do now? ", {
  limit: ["take knife", "pet dog", "kick dog", "take coat", "check inventory", "leave house", "sleep in bed"]
  });  
    if (a3 === "take knife" && inventory["knife"] = true) {
    console.log("You already have that");
} else if (a3 === "take knife" && inventory["knife"] = false) {
    console.log("G O O D  B O Y E");
} else if (a2 === "cats") {
    return false;
} else if (a2 === "check inventory") {
    console.log(inventory);
} else if (a2 === "take coat") {
    console.log("welp, you\'re smart enough not to die of hypothermia.");
    inventory.pop(0);
    inventory.push("'coat '");
    console.log(inventory + "has just been added to your inventory.")
} else if (a2 === "leave house") {
    console.log("it's raining really hard, that's probably not a good idea yet.")
} else if (a2 === "sleep in bed") {
    console.log("I probably shouldn't tell you this... but the world will be over by the time you wake up, bad call.")
} else if (a2 === "kick dog") {
    console.log("well aren't you F#$%&\'d up...")
};
a3 = readlineSecond.question("What would you like to do now? ", {
  limit: ["take knife", "pet dog", "kick dog", "take coat", "check inventory", "leave house", "sleep in bed"],
});  
a4 = readlineSecond.question('Which color of signal? '); // It's limited again. 
readlineSecond.setDefaultOptions({
    limit: ['beef', 'chicken']
});
a5 = readlineSecond.question('Beef or Chicken? '); // Input is limited to new 2 things. 
a6 = readlineSecond.question('And you? '); // It's limited to 2 things yet. 


