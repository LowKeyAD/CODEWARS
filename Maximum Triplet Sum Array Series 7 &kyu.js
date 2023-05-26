//Problem:

/*

Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .

Notes :
Array/list size is at least 3 .

Array/list numbers could be a mixture of positives , negatives and zeros .

Repetition of numbers in the array/list could occur , So (duplications are not included when summing).

*/



//Solution:

function maxTriSum(numbers){
  const [a,b,c] = [...new Set(numbers)].sort((a,b) => b-a)
  return a+b+c
}


//or


function maxTriSum(numbers){
    let sum = 0; 
    let unique = [...new Set(numbers)]
    unique.sort((a,b) => b-a);
    sum += unique[0] + unique[1] + unique[2]
    return sum;
}