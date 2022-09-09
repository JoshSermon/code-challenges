// LEETCODE QUESTION 48 - ROTATE IMAGE




//      Swap Them      Now, We Have The Answer, Just In Reverse Order
// [1,2,3]     [1,4,7]              [7,4,1]
// [4,5,6] =>  [2,5,8]    =>        [8,5,2]
// [7,8,9]     [3,6,9]              [9,6,3]

var rotate = function(matrix) {
    for(let r = 0; r < matrix.length; r++) {
        for(let c = r; c < matrix[0].length; c++) {
            [matrix[r][c], matrix[c][r]] = [matrix[c][r], matrix[r][c]];
        }
    }
    for (let row of matrix) {
        row.reverse();
    }
};