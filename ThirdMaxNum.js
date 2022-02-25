/*
Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.
*/

var thirdMax = function(nums) {
    
    let removeDuplicates = [...new Set(nums)];
    
    let sortedNums = removeDuplicates.sort((a,b) => b - a);
    
    
    if(sortedNums.length >= 3)
        return sortedNums[2];
    
    else if(sortedNums.length == 2)
        return sortedNums[0];
    
    else
        return sortedNums;
    
};