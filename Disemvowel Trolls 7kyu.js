//Problem:

/*

Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.



*/


//Solution:

function disemvowel(str) {
  let result = [];
  let nuStr = str.split("");
  let moreVow = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
 for(let i = 0; i < nuStr.length; i++){
    if(!moreVow.includes(nuStr[i])){
      result.push(nuStr[i])
    }
  }
  return result.join("")
}