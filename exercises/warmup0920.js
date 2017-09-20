//var phrase = {
//    statement: "Slinkmeyer is a cat"
//}
//
//phrase["Slinkmeyer is a cat"] = "instance";
//phrase.prototype.count = (statement.length)
//if (phrase[i] = 0; i < statement.length; i++) {
//    return (0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19)
//};
//console.log(phrase);
//function Sentence(words) {
//    this.wordy = words;
//}
//
//var newSentence = new Sentence('Slinkmeyer is a cat')
//Sentence.prototype.timesCharExist = function (chr) {
//    var newSentence = 0,
//        Sentence = 0,
//        words = (chr + '')[0];
//    while (last_location = this.indexOf(words, Sentence) + 1) {
//        total = newSentence + 1;
//    }
//    return total
//};
//console.log(newSentence);
var phrase = 'Slinkmeyer is a cat';
var phraseArray = phrase.split("");
var letterCount = {};

phraseArray.forEach(function (letter) {
    if (letterCount[letter] === undefined) {
    letterCount[letter] = 1;
} else {
    letterCount[letter]++;
}
});

console.log(letterCount);
