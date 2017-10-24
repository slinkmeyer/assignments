const redux = require("redux");

console.log(redux);

let state = {
  counter: 0
}

function addOne(){
  return {
    type: "ADD_ONE"
  }
}

function reducer(prevState, action){
  switch()
}

const store = redux.createStore(state);
