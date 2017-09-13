
function monkeyTrouble(aSmile, bSmile){
	if (aSmile > bSmile){
		return true;
	}else{
		return false;
	}
}

console.log(monkeyTrouble(true, false));

function monkeyTrouble(asmile, bsmile) {
	return asmile === bsmile;
}
console.log(monkeyTrouble(true, false));