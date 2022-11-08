

//Problem:

/*
Your task is to sum the differences between consecutive pairs in the array in descending order.

Example
[2, 1, 10]  -->  9
In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0
*/

//Solution:

sumOfDifferences = arr => arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0
