

//Problem:

/*
Create a function named combineNames that accepts two parameters (first and last name). The function should return the full name.

Example:

combineNames('James', 'Stevens')
returns:

'James Stevens'
*/


//Solution:

combineNames = (first,lastname) => first.concat(" ", lastname)