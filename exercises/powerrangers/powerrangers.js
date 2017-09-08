var powerRangers = ["Trini", "Kimberly", "Kimberly", "Billy", "Kimberly", "Trini", "Zack"];
var array = ["a", "b", "a", "c", "a", "d"];
var powerIndex = array.indexOf("Kimberly");
for (powerIndex.length) {
    powerRangers.push(powerIndex);
    powerIndex = array.indexOf("Kimberly", powerIndex + 1);
}
console.log(powerRangers);
// [0, 2, 4]
