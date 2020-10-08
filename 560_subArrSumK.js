
// https://leetcode.com/problems/subarray-sum-equals-k/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let map = new Map();
    // map takes sum & count
    map.set(0, 1);
    
    let sum = 0;
    let count = 0;
    
    for(let i = 0 ; i < nums.length; i++) {
        sum += nums[i];
        let diff = sum - k;
        if(map.has(diff)) {
            count += map.get(diff);
            
        }
        map.set(sum, map.has(sum)? map.get(sum) + 1. : 1);
    }
    
    return count;
};