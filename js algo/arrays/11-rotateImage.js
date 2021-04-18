/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotateImage = function(matrix) {
    
    var squaresCount = parseInt(matrix[0].length/2)
    
    for (let s = 0; s < squaresCount; s++) {
        
        var start = s
        var end = matrix[0].length - 1 - s
        var previous = null
        var j = 0
        for (let i = start; i < end; i++) {
            // firstRow
            var next = matrix[start][i]
            matrix[start][i] = previous
            var previous = next
            
            // lastCol
            next = matrix[i][end]
            matrix[i][end] = previous
            previous = next

            // lastRow
            next = matrix[end][end-j]
            matrix[end][end-j] = previous
            previous = next

            // firstCol
            next = matrix[end-j][start]
            matrix[end-j][start] = previous

            matrix[start][i] = next
            j++

        }
        
    }
};

var matrix = [
    [02,29,20,26,16,28],
    [12,27,09,25,13,21],
    [32,33,32,02,28,14],
    [13,14,32,27,22,26],
    [33,01,20,07,21,07],
    [04,24,01,06,32,34]
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