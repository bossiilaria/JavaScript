
function multiplyNumbers(numOne, numTwo) {
	var x = numOne.value;
	var y = numTwo.value;
	var z = eval(x*y);
	document.getElementById("demo").innerHTML = z;
}