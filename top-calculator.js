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

/*
module.exports = {
    add,
    subtract,
    multiply,
    divide
  };
*/