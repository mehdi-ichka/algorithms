class Solution:
    def rotate(self, matrix: List[List[int]]) -> None:
        self.mirrorDiagonal(matrix)
        self.mirrorVertical(matrix)
    
    def mirrorDiagonal(self, matrix: List[List[int]]) -> None:
        for i in range(len(matrix)):
            for j in range(i, len(matrix)):
                tmp = matrix[i][j]
                matrix[i][j] = matrix[j][i]
                matrix[j][i] = tmp

    def mirrorVertical(self, matrix: List[List[int]]) -> None:
        mid = len(matrix)//2
        end = len(matrix) - 1

        for i in range(end+1):
            for j in range(mid):
                tmp = matrix[i][j]
                matrix[i][j] = matrix[i][end-j]
                matrix[i][end-j] = tmp


sol = Solution()

matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

sol.rotate(matrix)
print(matrix)