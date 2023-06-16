//Problem:

/*
In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
--the order is: uppercase letters, lowercase, numbers and special characters.
*/

//Solutiion:


const solve = s => {
  const uppercase = (s.match(/[A-Z]/g) || []).length;
  const lowercase = (s.match(/[a-z]/g) || []).length;
  const numbers = (s.match(/\d/g) || []).length;
  const special = (s.match(/[^A-Za-z0-9]/g) || []).length;
  return [uppercase, lowercase, numbers, special];
}