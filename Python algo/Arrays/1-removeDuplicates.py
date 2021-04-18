class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        i = 0

        while i <= len(nums) - 2:
            if nums[i] == nums[i+1]:
                nums.pop(i+1)
            else:
                i += 1

        return len(nums)
    
sol = Solution()
print(sol.removeDuplicates([1,3,3,5]))
