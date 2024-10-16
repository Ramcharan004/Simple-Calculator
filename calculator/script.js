function appendCharacter(character) {
    document.getElementById("display").value += character;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteLast() {
    let display = document.getElementById("display").value;
    document.getElementById("display").value = display.slice(0, -1);
}

function calculateResult() {
    let expression = document.getElementById("display").value;
    try {
        let result = eval(expression); // Evaluate the expression
        if (!isFinite(result)) {
            throw "Invalid Expression"; // Handle division by zero or other infinite results
        }
        document.getElementById("display").value = result;
    } catch (error) {
        document.getElementById("display").value = "Invalid Expression"; // Display error message
    }
}
