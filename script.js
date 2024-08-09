function convertNumber() {
    const inputNumber = document.getElementById("inputNumber").value.trim();
    const inputType = document.getElementById("inputType").value;

    let binary, decimal, hexadecimal;

    if (inputType === "binary") {
        binary = inputNumber;
        decimal = parseInt(inputNumber, 2).toString(10);
        hexadecimal = parseInt(inputNumber, 2).toString(16).toUpperCase();
    } else if (inputType === "decimal") {
        binary = parseInt(inputNumber, 10).toString(2);
        decimal = inputNumber;
        hexadecimal = parseInt(inputNumber, 10).toString(16).toUpperCase();
    } else if (inputType === "hexadecimal") {
        binary = parseInt(inputNumber, 16).toString(2);
        decimal = parseInt(inputNumber, 16).toString(10);
        hexadecimal = inputNumber.toUpperCase();
    }

    document.getElementById("binaryResult").textContent = "Binary: " + binary;
    document.getElementById("decimalResult").textContent = "Decimal: " + decimal;
    document.getElementById("hexadecimalResult").textContent = "Hexadecimal: " + hexadecimal;
}