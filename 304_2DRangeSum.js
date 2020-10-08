
// https://leetcode.com/problems/range-sum-query-2d-immutable/

/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    if(!matrix.length) return null;
    this.preSum = new Array(matrix.length+1).fill(0).map(a => new Array(matrix[0].length +1). fill(0));
    
    // calculate prefix sum
    
    for(let i = 1 ; i < this.preSum.length; i++) {
        for(let j = 1; j < this.preSum[0].length; j++) {
            this.preSum[i][j] = 
                // row above and same colum
                this.preSum[i-1][j] +
                //same row prev col
                this.preSum[i][j-1] -
                // substract above corner
                this.preSum[i-1][j-1] +
                matrix[i-1][j-1]
        }
    }
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    let r1 = row1 +1;
    let r2 = row2 + 1;
    let c1 = col1 +1;
    let c2 = col2 + 1;
    let sum = this.preSum[r2][c2] - this.preSum[r1-1][c2]-this.preSum[r2][c1-1] + this.preSum[r1-1][c1-1];
    return sum;
};

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */