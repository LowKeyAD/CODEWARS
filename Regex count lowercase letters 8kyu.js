

//Problem:

/*

Your task is simply to count the total number of lowercase letters in a string.

*/


//Solution:

function lowercaseCount(str){
    return (str.match(/[a-z]/g) || []).length
}