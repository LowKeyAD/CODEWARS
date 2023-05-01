//Problem:

/*

Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

Examples
explode("312")
should return :

"333122"


*/

//Solution:

const explode = s => s.split('').map(x => x.repeat(+x)).join('')