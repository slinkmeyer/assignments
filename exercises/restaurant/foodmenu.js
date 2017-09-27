var cheese = [
    {
        item: 'cheesy potatoes',
        price: .99,
        description: 'exactly what it sounds like',
}, {
        item: 'dumpster water',
        price: 4.00,
        description: 'will give you disease'

}, {
        item: 'french toast',
        price: 2.00,
        description: 'toasty'
    }
];


function MenuThings(item, price, description) {
    this.item = item;
    this.price = price;
    this.description = description;

};

let food = new MenuThings("raccoon hearts", 6.49, "You already know what it is");
let foodTwo = new MenuThings("baby tar tar", 6.66, "Brought in fresh daily!");
let foodThree = new MenuThings("hot pocket", 20.99, "filled with love");

cheese.push(food, foodTwo, foodThree);
console.log(cheese);

for (var i = 0; i < cheese.length; i++) {
 document.getElementById("catss").innerHTML += "<li>" + cheese[i].item + cheese[i].price + cheese[i].description + "</li>";
}
