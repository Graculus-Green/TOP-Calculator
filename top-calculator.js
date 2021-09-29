//let keyName = e.target.name;
let keys = document.querySelectorAll('.btn');
let currentNum = '';


function keyInput() {
 
    keys.forEach(key => {
    key.addEventListener('click', e => {
        let input = e.target.innerHTML;
        console.log(input);
        if(e.target.id === 'clear'){
            currentNum = '';
        }      
        else if (e.target.id === 'backspace') {
            currentNum = currentNum.slice(0,currentNum.length-1);
        }
        else {

            currentNum = currentNum + input;
        }
        return document.querySelector('.screen').innerHTML = currentNum;
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
        return "Great, now the Cosmos has imploded..."
    }
    return Math.round((a/b)*100)/100;
};

let operate = (operator, a, b) => {
    switch(operator){
        case "+":
            return add(a,b);
        case "-":
            return subtract(a,b);
        case "*":
            return multiply(a,b);
        case "/":
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