

//Problem:

/*
Create a function that accepts a list/array and a number n, and returns a 
list/array of the first n elements from the list/array.
*/

//Solution: 

function take(arr, n) {
    newArr = arr.slice(0,n)
    return newArr
}