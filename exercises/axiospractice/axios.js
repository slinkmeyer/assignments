//var xhr = new XMLHttpRequest();
//
//xhr.onreadystatechange = function() {
//    if (xhr.readyState === 4 && xhr.status === 200) {
//        console.log(JSON.parse(xhr.response));
//    }
//}
//
//xhr.open("GET", "https://api.vschol.io/ericnatejones/todo/");
//xhr.send();

var update = {
    completed: true
}
axios.put("https://api.vschool.io/ericnatejones/todo/59cd54b48e509d2c3e49e038", update).then(function(response) {
    console.log(response.data);
});
//
//var newTodo = {
//    title: "Buy first",
//    description: "Not carrits, although they're technically a tuber"
//}
//
//axios.post("https://api.vschool.io/ericnatejones/todo", newTodo).then(function(response) {
//    console.log(response.data);
//});
//
//axios.delete("https://api.vschol.io/ericnatejones/todo/59cd318c8e509d2c3e49e000").then(function(response) {
//    console.log(response.data);
//});



//var update = {
//    completed: true
//}
//
//axios.get("https://api.vschol.io/ericnatejones/todo").then(function(response) {
//    console.log(response.data);
//});