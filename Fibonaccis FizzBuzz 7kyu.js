//Problem:

/*

The goal of this kata is two-fold:

1.) You must produce a fibonacci sequence in the form of an array, containing a number of items equal to the input provided.

2.) You must replace all numbers in the sequence divisible by 3 with Fizz, those divisible by 5 with Buzz, and those divisible by both 3 and 5 with FizzBuzz.

For the sake of this kata, you can assume all input will be a positive integer.

Use Cases
Return output must be in the form of an array, with the numbers as integers and the replaced numbers (fizzbuzz) as strings.

Examples
Input:

fibsFizzBuzz(5)
Output:

[ 1, 1, 2, 'Fizz', 'Buzz' ]

*/

//Solution:


var fibsFizzBuzz = function(n) {
    let result = [],
        [a,b] = [0,1]
    for(let i = 0; i < n; i++){
      [a,b] = [b, a + b]
      result.push(a % 15 == 0 ? 'FizzBuzz' :
                  a % 3 == 0 ? 'Fizz' :
                  a % 5 == 0 ? 'Buzz' : a)
    }
    return result
  }