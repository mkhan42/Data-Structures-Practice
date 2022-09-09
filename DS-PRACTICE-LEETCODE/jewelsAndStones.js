/*
You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".
*/

var numJewelsInStones = function(jewels, stones) {
    let stonesArr = stones.split('')
    let filterStone = stonesArr.filter(letter => jewels.includes(letter))
    let stoneLength = filterStone.length
    
    return stoneLength
     
 };
//time complexity is 
 console.log(numJewelsInStones("aA", "aAAbbbb"))