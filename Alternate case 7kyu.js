//Problem:

/*
Write function alternateCase which switch every letter in 
string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD
*/

//Solution:

function alternateCase(s) {
  let nuStr = '';
  for(let i = 0; i < s.length; i++){
    if( s[i] === s[i].toUpperCase()){
      nuStr += s[i].toLowerCase();
    }else{
      nuStr += s[i].toUpperCase();
    }
  }
  return nuStr
  }