/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotateImage = function(matrix) {
    
    mirrorDiagonal(matrix)
    mirrorVertical(matrix)
};

var mirrorDiagonal = function(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = i; j < matrix.length; j++) {
            
            var tmp = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = tmp
        }
    }
}

var mirrorVertical = function(matrix) {
    var mid = Math.floor(matrix.length/2)
    var end = matrix.length-1

    for (let i = 0; i <= end; i++) {
        for (let j = 0; j < mid; j++) {

            var tmp = matrix[i][j]
            matrix[i][j] = matrix[i][end-j]
            matrix[i][end-j] = tmp
        }
    }
}

var matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

rotateImage(matrix)
console.log(matrix)

// [
//     [04,33,13,32,12,02],
//     [24,01,14,33,27,29],
//     [01,20,32,32,09,20],
//     [06,07,27,02,25,26],
//     [32,21,22,28,13,16],
//     [34,07,26,14,21,28]
// ]