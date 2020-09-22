// alert("yes it's running!");

var results = document.getElementById("results");
var num1 = "";
var num2 = "";
var operation = "";

function pressButton(key) {
    num1 += key;
    // console.log(num1);
    results.innerHTML = num1;
}

function selectOperation(key) {
    operation = key;
    num2 = num1;
    num1 = "";
}

function calculate() {
    var a = parseFloat(num2);
    var b = parseFloat(num1);
    var result = 0;
    if(operation === "+") {
        result = a + b;
    } else if(operation === "-") {
        result = a - b;
    } else if(operation === "*") {
        result = a * b;
    } else if(operation === "/") {
        result = a / b;
    }
    num1 = result;
    results.innerHTML = num1;
}

function clearScreen() {
    num1 = "";
    num2 = "";
    operation = "";
    results.innerHTML = 0;
}