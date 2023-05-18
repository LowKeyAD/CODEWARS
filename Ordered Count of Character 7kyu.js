//Problem:

/*

Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).

Consult the solution set-up for the exact data structure implementation depending on your language.

Example:

orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]



*/


//Solution:

monkeyMic
var orderedCount = function (text) {
  let coll = [...new Set(text)];
  let answer = [];
  for (let i = 0; i < coll.length; i++) {
      let sum = 0;
      for (let j = 0; j < text.length; j++) {
          if (coll[i] == text[j]) {
              sum++;
          }
      }
      answer.push([coll[i], sum]);
  }
  return answer;
}

//or

const orderedCount = s => [...new Set(s)].map(k => [k, s.split(k).length - 1]);