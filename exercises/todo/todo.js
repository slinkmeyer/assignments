document.getElementById("todo-form").addEventListener("submit", function (event) {
    event.preventDefault();
    var newTodo = document.getElementById("new-todo-text");


    // Easier way
    var list = document.getElementById("todo-list");
    list.innerHTML = "<li>" + newTodo.value + "</li>" + list.innerHTML;

    newTodo.value = "";
    newTodo.focus();
    // Low level way of creating elements
    //    var newLi = document.createElement("li");
    //    document.getElementById("todo-list").appendChild(newLi);
    //    var todoTextNode = document.createTextNode(newTodoText);
    //    newLi.appendChild(todoTextNode);
})
