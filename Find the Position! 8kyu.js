

//Problem: When provided with a letter, return its position in the alphabet.

//Input :: "a"

//Ouput :: "Position of alphabet: 1"


//Solution: 

position = letter => `Position of alphabet: ${letter.charCodeAt() - 96}`

//or

function position(letter) {
    return `Position of alphabet: ${letter.charCodeAt(0) - 96}`
}

//or

function position(letter){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return 'Position of alphabet: ' + (alphabet.indexOf(letter) + 1);
}