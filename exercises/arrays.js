
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

var fruit = ["banana", "apple", "orange", "watermelon"];
document.getElementById("demo").innerHTML = fruits;

function myFunction() {
    fruits.push("Kiwi");
    document.getElementById("demo").innerHTML = fruits;
}