const calculator = require('./top-calculator');

describe ('divide', () => {
    test('divide two numbers', () =>{
        expect(calculator.divide(10,2)).toBe(5);
    });
});
