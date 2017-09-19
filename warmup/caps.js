//write a function that takes an array of numbers and returns the largest

//function Largest(arr) {
//    var Largest = arr[0];
//    for (var i = 1; i < arr.length; i++) {
//        if (Largest < arr[i]) {
//            Largest = arr[i];
//        }
//    }
//    return Largest;
//}
//
//console.log(Largest([1,2,3]));
//console.log(Largest([-1000, 1000, 0]));


//write a function that takes an array of words and a character and return each word that has that letter present

//function words() {
//var arr = [cats, flag, dinosaur, blueberry, lunch];
//for(var i = 0; i < words.length; i++)
//{
//    if(words[i].indexOf('a') != -1)
//    {
//    }
//}
//    return words;
//}
//    
//    console.log(words);

function filterWords(arr, char) {
    var matches = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].indexOf(char) !== -1) {
            matches.push(arr[i]);
        }
    }
    
    return matches;
}

console.log(filterWords(["cats", "bologne", "dragon", "turtle", "Venezuela"], "a"));
//write a function that takes a num1 and num2 and returns whether num1 is divisible by num2

function divide(a,b) {
    if (a % b === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(divide(4, 2));
console.log(divide(5, 2));