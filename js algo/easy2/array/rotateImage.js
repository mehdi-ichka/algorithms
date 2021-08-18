/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotate = function(matrix) {
    var last = matrix.length-1 
    for (let i = 0; i < Math.ceil((last+1)/2); i++) {
        for (let j = 0; j < Math.ceil((last+1)/2); j++) {

            var tmp = matrix[last-j][i]
            matrix[last-j][i] = matrix[last-i][last-j]
            matrix[last-i][last-j] = matrix[j][last-i]
            matrix[j][last-i] = matrix[i][j]
            matrix[i][j] = tmp
            
        }
    }
    
    return matrix
};

var matrix = [
    [05,01,09,11,91],
    [02,04,08,10,93],
    [13,03,06,07,95],
    [15,14,12,16,90],
    [23,24,22,26,99]
]

// Output: [
    // [15,13,2,5],
    // [14,3,4,1],
    // [12,6,8,9],
    // [16,7,10,11]
// ]

console.log(rotate(matrix))