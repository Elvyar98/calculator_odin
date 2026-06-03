let firstNumber;
let secondNumber;
let operator;
let answer;


const add = function(a,b) {
    return parseInt(a) + parseInt(b);
};

const subtract = function(a,b) {
    return parseInt(a) - parseInt(b);
};

const multiply = function(a,b) {
    return parseInt(a) * parseInt(b);
};

const divide = function(a,b) {
    return parseInt(a) / parseInt(b);
};

function operate (a,b,c) {
    switch(c) {
        case "+":
            answer = add(a,b);
        case "-":
            answer = subtract(a,b);
        case "*":
            answer = multiply(a,b);
        case "/":
            if (b == 0) return "You can't divide by Zero";
            answer = divide(a,b);
        default:
            return "Illegal operation"
    };
}