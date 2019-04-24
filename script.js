var calcButtons = document.getElementsByClassName("button");
var anzeige = document.getElementById("anzeige");
/**
 * aktueller Wert nach klicken auf einen action-button
 */
var currentValue = "";
/**
 * gespeicherte Wert nach klicken auf einen action-button
 */
var storedValue = 0;

for (var i = 0; i < calcButtons.length; i++) {
    calcButtons[i].onclick = function (e) {
        currentValue = (currentValue * 10) + parseInt(e.target.value);
        anzeige.value = currentValue;
        console.log(currentValue);
    }
};

var addition = document.getElementById("addition").onclick = function() {
    /**
     * befehl optimieren
     */
    storedValue = storedValue + currentValue;
    currentValue = 0;
    updateAnzeige();
}

var deleteButton = document.getElementById("delete").onclick = function() {
    storedValue = 0;
    currentValue = 0;
    updateAnzeige();
}

/**
 * zeigt den storedValue in der Anzeige an
 */
function updateAnzeige() {
    anzeige.value = storedValue;
}