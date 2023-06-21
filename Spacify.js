//Problem:

/*
Modify the spacify function so that it returns the given string with spaces inserted between each character.

spacify("hello world") // returns "h e l l o   w o r l d"
*/

//Solution:

function spacify(str) {
  let nuStr = str.split("")
  let addStr = nuStr.join(" ")
 return addStr
}