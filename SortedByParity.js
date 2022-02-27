/*
Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.
Return any array that satisfies this condition.
*/

var sortArrayByParity = function(nums) {
    
    let even = []
    let odd = []

    for(let i = 0; i < nums.length; i++){
    if(nums[i] % 2 === 0){
        even.push(nums[i])
    } 
    if (nums[i] % 2 !== 0)
       odd.push(nums[i])
    }
    return [...even, ...odd]
    
};