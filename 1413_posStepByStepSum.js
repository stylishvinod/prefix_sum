

// https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/

/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
    let min = nums[0];
    let preFixSum = nums[0];
    for(let i = 1; i< nums.length; i++) {
        preFixSum += nums[i];
        min = Math.min(min, preFixSum);
    }
    
    return min >0? 1 : -min + 1;
    
};