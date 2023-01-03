

//Problem:

/*

Make multiple functions that will return the sum, difference, modulus, product, quotient, and the exponent respectively.

Please use the following function names:

addition = add

multiply = multiply

division = divide (both integer and float divisions are accepted)

modulus = mod

exponential = exponent

subtraction = subt

Note: All math operations will be: a (operation) b



*/


//Solution:

function add(a,b){
    let sum = a + b
      return sum
  }
  
  function divide(a,b){
    let div = a / b
      return div
  }
  
  function multiply(a,b){
    let mul = a * b
      return mul
  }
  
  function mod(a,b){
    return a % b
  }
     
  function exponent(a,b){
    let expo = a ** b
      return expo
  }
      
  function subt(a,b){
    let subzero = a - b
      return subzero
  }