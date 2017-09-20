console.log('welcome to your prison! You have one hour to escape.')


var readlineFirst = require("readline-sync");
let answer = "You have Chosen Wisely!";
let play = (readlineFirst.keyInYN("Do you wish to play?"));


while (play === true) {
    console.log("Wise decision");
    let multiChoice = ['There\'s an ominous hole in the wall, insert your hand?', 'Look for a key? ', 'Open the door? '],
        index = readlineFirst.keyInSelect(multiChoice, 'Make your choice: ');
    console.log('Ok, ' + multiChoice[index] + ' You feel a very large animal lick your hand, it\'s pretty creepy. YOU ARE DEAD');
    break;

}
