//Problem:

/*

Debug   function getSumOfDigits that takes positive integer to calculate sum of its digits. Assume that argument is an integer.

Example
123  => 6
223  => 7
1337 => 14


*/



//Solution:


const getSumOfDigits = number => number.toString().split('').map(Number).reduce((a, b) => a + b)


//

function getSumOfDigits(integer) {
    var sum = 0;
    var digits = integer.toString();
    for(let i in digits) {
      sum += digits[i] * 1;
    }
    return sum;
}