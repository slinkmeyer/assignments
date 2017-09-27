function lastNums(a, b) {
    var aArray = a.toString().split('').map(Number);
    var bArray = b.toString().split('').map(Number);
    if (aArray[aArray.length - 1] === bArray[bArray.length - 1]) {
        return true;

    } else {
        return false;
    }
};


    module.exports = {
        lastNums: lastNums
    };