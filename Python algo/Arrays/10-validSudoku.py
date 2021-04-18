class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        cubes = [
            [set(), set(), set()],
            [set(), set(), set()],
            [set(), set(), set()]
        ]
        
        for i in range(9):
            row = set()
            column = set()

            for j in range(9):
                cube = cubes[i//3][j//3]

                if board[i][j] in cube and board[i][j] != '.':
                    return False
                cube.add(board[i][j])

                if board[i][j] in row and board[i][j] != '.':
                    return False
                row.add(board[i][j])

                if board[j][i] in column and board[j][i] != '.':
                    return False
                column.add(board[i][j])

        return True

sol = Solution()

board = [["5","3",".",".","7",".",".",".","."]
        ,["6",".",".","1","9","5",".",".","."]
        ,[".","9","8",".",".",".",".","6","."]
        ,["8",".",".",".","6",".",".",".","3"]
        ,["4",".",".","8",".","3",".",".","1"]
        ,["7",".",".",".","2",".",".",".","6"]
        ,[".","6",".",".",".",".","2","8","."]
        ,[".",".",".","4","1","9",".",".","5"]
        ,[".",".",".",".","8",".",".","7","9"]]

res = sol.isValidSudoku(board)