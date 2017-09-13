var goombaPrice = parseInt(document.getElementById("goomba-price").innerHTML);

document.getElementById("calculate").addEventListener("click", function() {
	var goombaCount = parseInt(document.getElementById("goomba-count").value);
	var goombaTotal = goombaprice * goombaCount;
	document.getElementById("goomba-total").innerHTML = goombaTotal
});

document.getElementById("goomba-count").addEventlistener("input, function"() {
														 var goombaCount = parseInt(document.getElementById("goomba-count").value);
document.getElementById("goomba-total").innerHTML = goombaTotal
														 });// JavaScript Document