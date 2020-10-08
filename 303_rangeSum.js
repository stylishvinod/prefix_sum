
// https://leetcode.com/problems/range-sum-query-immutable/

/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.sumArr  = new Array(nums.length + 1).fill(0);
    
    
    for(let i = 1 ; i <= nums.length; i++) {
        this.sumArr[i] = this.sumArr[i-1] + nums[i-1];
    }
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
  
        return this.sumArr[j+1] - this.sumArr[i]
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */