



//Problem: Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.




//Solution: 

var countSheep = function (length){
    return Array.from({ length }, (x,y) => ++y + ' sheep...').join('')
}