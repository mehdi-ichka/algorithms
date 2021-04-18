# Best solution: use counter then count down in loop until counter is 0

class Solution:
    def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]:
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: List[int]
        """
        list = []
        for i in range(len(nums1)):
            for j in range(len(nums2)):
                if nums1[i] == nums2[j]:
                    list.append(nums1[i])
                    nums2.pop(j)
                    break
        
        return list

sol = Solution()
print(sol.intersect([1,2,2,1], [1,2]))