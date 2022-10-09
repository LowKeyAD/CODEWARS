

//Problem:

/*altERnaTIng cAsE <=> ALTerNAtiNG CaSe
altERnaTIng cAsE <=> ALTerNAtiNG CaSe
Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in 
your selected language; see the initial solution for details) such that 
each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:
*/


//Solution:

String.prototype.toAlternatingCase = function () {
    return this.split('').map(x => x == x.toUpperCase() ? x.toLowerCase() : x.toUpperCase()).join('')
}