//let keyName = e.target.name;
let keys = document.querySelectorAll('.btn');
let displayNum = '';
let storedNum = '';
let displayOp = '';

function keyInput() {
 
    keys.forEach(key => {
    key.addEventListener('click', e => {
        let input = e.target.innerHTML;
        console.log(input);
        switch(e.target.id) {
            case 'clear':
                displayNum = '',storedNum = '',displayOp = '';
                break;    
            case 'backspace':
                displayNum = displayNum.slice(0,displayNum.length-1);
                break;
            case 'sign':
                displayNum.includes('-') ? displayNum = displayNum.slice(1):displayNum = '-' + displayNum;
                break;
            case "point":
                displayNum.includes(".") ? (displayNum = displayNum):(displayNum = displayNum + input);
                break;
            case 'operator':
                if (storedNum === '') {
                    storedNum = displayNum;
                    displayOp = input;
                    displayNum = '';
                }
                else {
                    storedNum = operate(Number(storedNum), displayOp, Number(displayNum)).toString();
                    displayNum= '', displayOp = input;
                }
                break
            case 'ans':
                displayNum = operate(Number(storedNum), displayOp, Number(displayNum)).toString();
                storedNum= '', displayOp = '';
                break;
            default:
                displayNum.includes("Not like that") ? displayNum = input: displayNum = displayNum + input;
        }
        document.querySelector('.storednum').innerHTML = storedNum;
        document.querySelector('.displayop').innerHTML = displayOp;

        document.querySelector('.displaynum').innerHTML = displayNum;
    });
 });
};

 /*let screen = () => {
     keyInput();
     document.querySelector('.screen').innerHTML = currentNum;
 };*/


let add = (a,b) => a+b;
let subtract =(a,b) => a-b;
let multiply = (a,b) => a*b;
let divide = (a,b) => {
    if (b === 0) {
        return "Not like that"
    }
    return Math.round((a/b)*1000000000)/1000000000;
};

let operate = (a, operator, b) => {
    switch(operator){
        case "+":
            return add(a,b);
        case "-":
            return subtract(a,b);
        case "×":
            return multiply(a,b);
        case "÷":
            return divide(a,b);
    };
};

keyInput();
/*
module.exports = {
    add,
    subtract,
    multiply,
    divide
  };
*/