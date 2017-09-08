var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

//
var lastVegetable = vegetables.pop();
//console.log(vegetables)

fruit.shift();
//console.log(fruit);

var orangeIndex = fruit.indexOf("orange");

//console.log(fruit.indexOf("orange"));

fruit.push(orangeIndex);
//console.log(fruit);

//console.log(vegetables.length);

vegetables.push(vegetables.length);
//console.log(vegetables);

var food = fruit.concat(vegetables);
//console.log(food);

food.splice(4, 2);
//console.log(food);

food.reverse();
//console.log(food);

var answer = food.toString();
console.log(answer);