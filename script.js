var calcButtons = document.getElementsByClassName("button");
var anzeige = document.getElementById("anzeige");
/**
 * aktueller Wert nach klicken auf einen action-button
 */
var currentValue = "";
/**
 * gespeicherte Wert nach klicken auf einen action-button
 */
var storedValue = null;
var storedOperator = null;

for (var i = 0; i < calcButtons.length; i++) {
    calcButtons[i].onclick = function (e) {
        currentValue = currentValue + e.target.value;
        //currentValue = (currentValue * 10) + parseInt(e.target.value);
        anzeige.value = currentValue;
        currentValue;
    }
};
//kommentar
function doCalculation(number1, operator, number2) {
    if (operator === "+") {
        return parseFloat(number1) + parseFloat(number2);
    }
    if (operator === "-") {
        return parseFloat(number1) - parseFloat(number2);
    }
    if (operator === "*") {
        return parseFloat(number1) * parseFloat(number2);
    }
    if (operator === "/") {
        return parseFloat(number1) / parseFloat(number2);
    }

}

var addition = document.getElementById("addition").onclick = function () {
    if (storedValue === null) {
        storedValue = currentValue;
    }
    else {
        storedValue = doCalculation(storedValue, storedOperator, currentValue);

    }
    storedOperator = "+";
    currentValue = "";
    updateAnzeige();
}

var subtraction = document.getElementById("subtraction").onclick = function () {
    if (storedValue === null) {
        storedValue = currentValue;
    }
    else {
        storedValue = doCalculation(storedValue, storedOperator, currentValue);

    }
    storedOperator = "-";
    currentValue = "";
    updateAnzeige();
}

var multiplication = document.getElementById("multiplication").onclick = function () {
    if (storedValue === null) {
        storedValue = currentValue;
    }
    else {
        storedValue = doCalculation(storedValue, storedOperator, currentValue);

    }
    storedOperator = "*";
    currentValue = "";
    updateAnzeige();
}

var division = document.getElementById("division").onclick = function () {
    if (storedValue === null) {
        storedValue = currentValue;
    }
    else {
        storedValue = doCalculation(storedValue, storedOperator, currentValue);

    }
    storedOperator = "/";
    currentValue = "";
    updateAnzeige();
}

var resultButton = document.getElementById("result").onclick = function () {
    if (storedValue === null) {
        storedValue = currentValue;
    }
    else {
        storedValue = doCalculation(storedValue, storedOperator, currentValue);

    }
    storedOperator = "=";
    currentValue = "";
    updateAnzeige();
}

var deleteButton = document.getElementById("delete").onclick = function () {
    storedValue = null;
    currentValue = "";
    updateAnzeige();
}

/**
 * zeigt den storedValue in der Anzeige an
 */
function updateAnzeige() {
    anzeige.value = (storedValue === null) ? "0" : storedValue;

}