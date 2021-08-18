/**
 * @param {character[][]} board
 * @return {boolean}
 */
 var isValidSudoku = function(board) {

    for (let i = 0; i < board; i++) {
        var colMap = digitMap()
        for (let j = 0; j < board[i][j].length; j++) {
            var x = colMap.get(board[i][j])
            
            if(x != null) {
                if(x == true)
                    return false
                colMap.set(board[i][j], true)
            }
        }
    }

    for (let i = 0; i < board[0]; i++) {
        var rowMap = digitMap()
        for (let j = 0; j < board[0][j].length; j++) {
            var x = rowMap.get(board[i][j])
            
            if(x != null) {
                if(x == true)
                    return false
                rowMap.set(board[i][j], true)
            }
        }
    }
};

function digitMap() {
    var res = new Map()
    for (let i = 1; i < 10; i++) {
        res.set(i, false)
    }
    
    return res
}

var board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

var res = isValidSudoku(board)

console.log(res)