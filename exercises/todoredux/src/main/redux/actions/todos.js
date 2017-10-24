//server

import axios from "axios";
const todosUrl = "https://apivschool.io/adam/todo";

export function loadTodos() {
  return (dispatch) => {
    axios.get(todosUrl).then((response) => {
      dispatch({type: "LOAD_TODOS", todos: response.data})
    }).catch((err) => {
        console.log(err);
    })
  }
}

export function addTodo(todo) {
  return (dispatch) => {
    axios.post(todosUrl, todo)
  }
}

export function editTodo(todo) {
  return (dispatch => {
    axios.put
  })
}
