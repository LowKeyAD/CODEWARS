//Problem:

/*

Remove the duplicates from a list of integers, 
keeping the last ( rightmost ) occurrence of each element.

*/

//Solution:

const solve = arr => [...new Set(arr.reverse())].reverse()