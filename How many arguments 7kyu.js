//Problem:

/*

args_count(1, 2, 3) -> 3
args_count(1, 2, 3, 10) -> 4

*/


//Solution:

function args_count(...x) {
  return x.length;
}