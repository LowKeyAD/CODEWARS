


//Problem: Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

//invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
//invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
//invert([]) == []
//You can assume that all values are integers. Do not mutate the input array/list.



//Solution


invert = array => array.map(x => -x)


//or


function invert(array) {
    return array.map( x => x === 0 ? x : -x);
}


