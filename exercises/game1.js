console.log('welcome to your prison! You have one hour to escape.')


var readlineFirst = require("readline-sync");
let answer = "You have Chosen Wisely!";
let play = (readlineFirst.keyInYN("Do you wish to play?"));


while (play === true) {
    console.log("Wise decision");
    let multiChoice = ['There\'s an ominous hole in the wall, insert your hand?', 'Look for a key? ', 'Open the door? '],
        index = readlineFirst.keyInSelect(multiChoice, 'Make your choice: ');
    
    if (index === 0) {
    console.log(('Ok, ' + index + ' You feel a very large animal lick your hand, it\'s pretty creepy.\n YOU ARE DEAD'));
        
        } else if (index === 1) { 
            console.log(('Ok, ' + multiChoice[index] + ' You find a key under a fold of the guard\'s fat. You escape \nto freedom where you live a boring life of cheap food and Netflix binges.')) 
        
    } else if (index === 2) {
        console.log(('ok, ' + multiChoice[index] + ' The door is locked. This is a jail. You idiot.'))
    } else {
        console.log('You have chosen to stay in jail, how sad.');
    };
break;
};




