/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/
// 10 + 2 * 6 -> 22
// 10 + (2 * 6) -> 22
class Calculator {
    constructor(){
      this.result = 0;
    }
    checkBrackets(expr)
    {
      let stack = [];
      for(let ch of expr){
        if(ch === '(') stack.push(ch);
        else if(ch === ')'){
          if(stack.length === 0) return false;
          let topElement = stack.pop();
          if(topElement !== '(') return false;
        }
        else continue;
      }
      return stack.length === 0 ? true : false;
    }
    parseExpr(expression){
      let acceptableCharacters = ['+','-','*','/','(',')'];
      let expr = "";
      for(let ch of expression)
      {
        if((ch >= '0' && ch <= '9') ||(acceptableCharacters.includes(ch)))
        {
          expr += ch;
        }
        else if(ch === ' ') continue;
        else throw new Error();
      }
      if([...expr].includes('(') || [...expr].includes(')')){
        if(!this.checkBrackets([...expr])) throw new Error();
      } 
      return expr;
    }
    add(value){
      this.result += value;
    }
    subract(value){
      this.result -= value;
    }
    multiply(value){
      this.result *= value;
    }
    divide(value){
      if(value === 0) return undefined;
      this.result /= value;
    }
    clear() {
      this.result = 0;
    }
    getResult(){
      return this.result;
    }
    calculate(expression){
      expression = this.parseExpr(expression);
      let ans = eval(expression);
      return ans === Infinity ?  new Error() : ans;
    }
}
let obj = new Calculator();
console.log(obj.calculate("-10 /*/ 0"));
module.exports = Calculator;
