


//Problem: Write a function which calculates the average of the numbers in a given list.
//Note: Empty arrays should return 0.



//Solution:

find_average = array => array.length == 0 ? 0 : array.reduce((prev,curr) => prev + curr) / array.length


//or


var find_average = (array) => {  
    return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
}