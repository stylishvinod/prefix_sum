
// https://leetcode.com/problems/subarray-product-less-than-k/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    if(k <= 1) return 0;
    
    let product = 1;
    let left = 0;
    let ans = 0;
    
    for(let i=0;i < nums.length; i++) {
        product *= nums[i];
    
        // violation condition
        while(product >= k) {
            product /= nums[left];
            left++;
        }
            ans += i-left+1;

        }
    
    return ans;
};