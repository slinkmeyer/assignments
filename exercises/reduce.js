var numbers = [498, 283, 39];

var getSum = numbers.reduce(function(total, amount){
   return total + amount; 
});
console.log(getSum);

//

function stringConcat(arr) {
    return arr.reduce(function (str, obj) {
        return str + obj
    }, "");
}
stringConcat([1,2,3])

//

var voters = [  
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];
    
    function totalVotes(arr) {
        var voted = arr.reduce(function(runningTotal, currVoter) {
            if (currVoter.voted) {
                return runningTotal + 1;
            } else {
            return runningTotal;
            }
        }, 0);
        return voted;
    }

    console.log(totalVotes(voters));

//

function shoppingSpree(arr) {
    return arr.reduce(function(runningTotal, currObj) {
        return runningTotal + currObj.price;
    }, 0);
}

var wishlist = [  
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];


//

function flatten(arr) {
    return arr.reduce(function(flattened, curr) {
        return flattened.concat(curr);
    }, []);

}

var arrays = [  
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

console.log(flatten(arrays))

//

var voters = [  
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

function voterResults(arr) {
    var obj = {
    youngVotes: 0,
    youth: 0,
    midVotes: 0,
    mids: 0,
    oldVotes: 0,
    olds: 0,
    }
    return arr.reduce(function(results, currVoter) {
        if (currVoter.age >= 18 && currVoter.age <= 25) {
            results.youth++;
            if (currVoter.voted) {
                results.youngVotes++;
            }
        } else if (currVoter.age >= 26 && currVoter.age <=35) {
            results.mids++;
            if (currVoter.voted) {
                results.midVotes++;
            }
        } else if (currVoter.age >= 36 && currVoter.age >= 55) {
            results.olds++;
            if (currVoter.voted) {
                results.oldVotes++;
            }
        }
        return results;
    }, obj);

}
console.log(voterResults(voters))
