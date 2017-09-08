var shopper = {
    //number
    numberOfItems: 6,
    //boolean
    itemOneIsCheaper: true,
    groceryCart: ["bananas", "beer", "bread", "beans", "bacon", "beef"],
    //string
    makingDecisions: "this is tough...",
    //function
    thing: function () {
        if (itemOneIsCheaper){
            return "take item one"
        } else {
            return "take item two"
        }
    }
}