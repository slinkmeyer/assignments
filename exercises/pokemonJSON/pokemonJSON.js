
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let myPokemon = JSON.parse(this.responseText);
        document.getElementById("pokemon").innerHTML = myPokemon.name;
        let jsonObject = JSON.parse(jsonString);
        myPokemon = {
            return jsonObject
        }
    }
};
xmlhttp.open("GET", "http://api.vschool.io:6543/pokemon.json", true);
xmlhttp.send();



