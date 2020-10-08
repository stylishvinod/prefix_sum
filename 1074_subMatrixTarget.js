// https://leetcode.com/problems/number-of-submatrices-that-sum-to-target/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {number}
 */
var numSubmatrixSumTarget = function(matrix, target) {
  
    let preFixSum = new Array(matrix.length+1).fill(0).map(a => new Array(matrix[0].length+1).fill(0));
    
    // fill preFixSum
    
        for(let i = 1 ; i < preFixSum.length; i++) {
        for(let j = 1; j < preFixSum[0].length; j++) {
            preFixSum[i][j] = 
                // row above and same colum
                preFixSum[i-1][j] +
                //same row prev col
                preFixSum[i][j-1] -
                // substract above corner
                preFixSum[i-1][j-1] +
                matrix[i-1][j-1]
        }
    }
    
    let count = 0;
    for(let i = 0; i< matrix.length; i++) {
        for(let j = 0; j < matrix[0].length; j++) {
            
            for(let left = i ; left < matrix.length; left++) {
                for(let right = j; right <  matrix[0].length; right++) {
                    let sum = rangeSum(i, j, left, right, preFixSum);
                    if(sum === target) {
                        count++;
                    }
                }
            }
            
        }
    }
    
    return count;
}
    
    
    
function rangeSum(row1, col1, row2, col2, preSum) {
        let r1 = row1 +1;
    let r2 = row2 + 1;
    let c1 = col1 +1;
    let c2 = col2 + 1;
    let sum = preSum[r2][c2] - preSum[r1-1][c2]- preSum[r2][c1-1] + preSum[r1-1][c1-1];
    return sum;
    }
    
    
    
    
    
    
    
