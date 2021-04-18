class Solution:
    def rotate(self, nums, k):
        """
        Do not return anything, modify nums in-place instead.
        """
        length = len(nums)
        nums2 = [None] * length
        for i in range(0, max(0, length-k), 1):
            nums2[(i+k)%(length)] = nums[i]

        for i in range(0, max(length-k, length), 1):
            nums2[i] = nums[(i + length-k)%length]
        
        nums = nums2