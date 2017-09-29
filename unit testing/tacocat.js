function palindrome(word) {
    var toLower = word.toLowerCase
    var letterArray = toLower.split("");
    var reversed = letterArray.reverse();
    var final = reverse.join("");
    return === final;
}

    module.exports = palindrome;