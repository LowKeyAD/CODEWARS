

//Problem:

/*
Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.
*/

//Solution:  

function nearestSq(n){
    let a = Math.round(Math.sqrt(n));
    return a*a;
}


//or


const nearestSq = n => Math.pow(Math.round(Math.sqrt(n)), 2)
