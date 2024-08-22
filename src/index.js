"use strict";
const display = document.getElementById('display');
const buttons = Array.from(document.getElementsByClassName('btn'));
let currentInput = '';
let operator = '';
let previousInput = '';
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        if (value === null)
            return;
        switch (value) {
            case 'C':
                clearDisplay();
                break;
            case '+':
            case '-':
            case '*':
            case '/':
                handleOperator(value);
                break;
            case '=':
                calculateResult();
                break;
            default:
                appendToDisplay(value);
                break;
        }
    });
});
function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    display.value = '';
}
function appendToDisplay(value) {
    currentInput += value;
    display.value = currentInput;
}
function handleOperator(op) {
    if (currentInput === '')
        return;
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}
function calculateResult() {
    if (currentInput === '' || previousInput === '')
        return;
    const firstOperand = parseFloat(previousInput);
    const secondOperand = parseFloat(currentInput);
    let result;
    switch (operator) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            result = firstOperand / secondOperand;
            break;
        default:
            return;
    }
    display.value = result.toString();
    currentInput = result.toString();
    operator = '';
    previousInput = '';
}
