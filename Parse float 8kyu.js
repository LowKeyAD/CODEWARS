

//Problem:

/*
Write function parseF which takes an input and returns a number or 
null if conversion is not possible. 
The input can be one of many different types so be aware.
*/


//Solution:

function parseF(s){
    let parsed = parseFloat(s)
    return isNaN(parsed) ? null : parsed
}