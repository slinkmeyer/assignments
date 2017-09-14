function duplicates(str) {
    var unique = ""
    for (var i = 0; i < str.length; i++) {
        if (str.lastIndexOf(str[i]) === str.indexOf(str[i])) {
                unique += str[i];
            }
        }
        return unique;
    }
    console.log(duplicates("racecar"));

