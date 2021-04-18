/**
 * @param {character[][]} board
 * @return {boolean}
 */
 var isValidSudoku = function(board) {

    var cubes = [
        [new Set(), new Set(), new Set()],
        [new Set(), new Set(), new Set()],
        [new Set(), new Set(), new Set()]
    ]

    for (let i = 0; i < 9; i++) {

        var row = new Set()
        var column = new Set()
        

        for (let j = 0; j < 9; j++) {

            var cube = cubes[parseInt(i/3)][parseInt(j/3)]

            if(cube.has(board[i][j]) && board[i][j] !== '.')
                return false
            cube.add(board[i][j])

            if(row.has(board[i][j]) && board[i][j] !== '.')
                return false
            row.add(board[i][j])

            if(column.has(board[j][i]) && board[j][i] !== '.')
                return false
                column.add(board[i][j])
        }
        
    }

    return true
};