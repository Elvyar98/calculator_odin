let firstNumber;
let secondNumber;
let operator;
let answer;

const display = document.querySelector(".calculator__output");

const add = function(a,b) {
    return parseFloat(a) + parseFloat(b);
};

const subtract = function(a,b) {
    return parseFloat(a) - parseFloat(b);
};

const multiply = function(a,b) {
    return parseFloat(a) * parseFloat(b);
};

const divide = function(a,b) {
    return parseFloat(a) / parseFloat(b);
};

function operate (a,b,c) {
    switch(c) {
        case "+":
            return add(a,b);
        case "-":
            return subtract(a,b);
        case "*":
            return multiply(a,b);
        case "/":
            if (b == 0) return "You can't divide by Zero";
            return divide(a,b);
        default:
            return "Illegal operation"
    };

}
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if(button.classList.contains("calculator__key") && 
            (!button.classList.contains("calculator__key--operator") && 
            !button.classList.contains("calculator__key--clear") && 
            !button.classList.contains("calculator__key--enter") &&
            !button.classList.contains("calculator__key--backspace"))){

            if (firstNumber == null) {
                firstNumber = button.textContent;
                display.textContent = firstNumber;
            } else if (firstNumber != null && operator == null){
                firstNumber = (firstNumber ?? "") + button.textContent;
                display.textContent = firstNumber;
            } else if (operator != null) {
                secondNumber = (secondNumber ?? "") + button.textContent;
                display.textContent = secondNumber;
            }
     };

     if(button.classList.contains("calculator__key--operator")) {
         if(firstNumber != null && secondNumber != null && operator != null) {
            answer = operate(firstNumber,secondNumber, operator);
            display.textContent = answer;
            console.log(answer);
            firstNumber = answer;
            secondNumber = null;
            operator = null;
        }
        operator = button.textContent;
     }

     if (button.classList.contains("calculator__key--enter")) {
         if(firstNumber != null && secondNumber != null && operator != null) {
            answer = operate(firstNumber,secondNumber, operator);
            display.textContent = Math.round(answer * 100)/100;
            console.log(answer);
            firstNumber = answer;
            secondNumber = null;
            operator = null;
        }

     }
    

     if(button.classList.contains("calculator__key--clear")) {
        display.textContent = 0;
        firstNumber = secondNumber = answer = null;
        operator = null;
     }

     if(button.classList.contains("calculator__key--backspace")) {
        if(firstNumber != null && secondNumber != null && operator != null){
            secondNumber = null;
            display.textContent = operator;
        } else if(firstNumber != null && secondNumber == null && operator != null) {
            operator = null;
            display.textContent = firstNumber;
        } else {
            display.textContent = 0;
            firstNumber = null;
        }
    
     }

     if (button.classList.contains("calculator__key--decimal")) {
        if(operator == null) {
            if(!firstNumber?.includes(".")) {
                firstNumber = (firstNumber ?? "0") + ".";
                display.textContent = firstNumber;
            }
        } else {
            if(!secondNumber?.includes(".")) {
                secondNumber = (secondNumber ?? "0") + ".";
                display.textContent = secondNumber;
            }
        }
     }

    });
    
})
