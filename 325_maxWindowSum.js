// https://leetcode.com/problems/maximum-size-subarray-sum-equals-k/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubArrayLen = function(nums, k) {
    let map = new Map();
    
    let sum = 0;
    map.set(0, -1);
    let maxWindow = 0;
    
    for(let i = 0 ; i < nums.length; i++) {
        sum += nums[i];
        let diff = sum - k;
        
        if(map.has(diff)) {
            let currWin = i - map.get(diff);
            maxWindow = Math.max(maxWindow, currWin);
        } 
          
        if(!map.has(sum) ) {
            map.set(sum, i)
        }  
    }
    
    return maxWindow;
};