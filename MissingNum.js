/*
Given an array nums containing n distinct numbers in the range [0, n], 
return the only number in the range that is missing from the array.
*/

var missingNumber = function(nums) {
    
    let missing = 0;

    for (let i = 1; i <= nums.length; i++) 
        missing += (i - nums[i - 1]);
    return missing;
    
};