import React from "react";
import TodoItem from "./TodoItem";
import axios from "axios";


class TodoList extends React.Component {
  constructor() {
    super();
    this.state={
      todo: [],
      newTodo: {
        title: "",
      description: ""
    }
  }
  this.deleteTodo = this.deleteTodo.bind(this);
}
componentDidMount() {
  axios.get('https://api.vschool.io/adam/todo')
  .then(response=>{
    this.setState({
      todo: response.data
    })

  })
}

deleteTodo(id) {
  axios.delete(`https://api.vschool.io/adam/todo${id}`)
  .then(response=>{
    this.setState(prevState => {
      let deletedItem = prevState.todo.filter((xItem)=>{
        return xItem._id !== id;
      })
          return {
            todo: deletedItem
          }
        })
    }
  )

}

render() {
  return (
    <div>
    {this.state.todo.map((item, i) => {
      return (
        <TodoItem
        todo={item}
        key={item.title + i}
        deleteTodo={this.deleteTodo}/>
      )
    })}
    </div>
  )
}
}

export default TodoList
