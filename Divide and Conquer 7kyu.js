
//Problem:

/*
Given a mixed array of number and string representations of integers, 
add up the non-string integers and subtract the total of the string integers.

Return as a number.
*/

//Solution:

function divCon(arr){
    let numTotal = 0;
    let strNumTotal = 0;

    for (const val of arr) {
        if (typeof val === "number") {
            numTotal += val;
        } else {
            strNumTotfffffffffffffffffffffal += Number(val);
        }
    }

    return numTotal - strNumTotal;
}