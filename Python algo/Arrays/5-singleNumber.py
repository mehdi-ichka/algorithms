class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        x = {}
        for i, val in enumerate(nums):
            if val in x:
                x[val] = False
            else:
                x[val] = True

        for key in x:
            if x[key] == True:
                return key
        return 0

sol = Solution()
print(sol.singleNumber([4,4,1,2,5,1,2,3,5]))