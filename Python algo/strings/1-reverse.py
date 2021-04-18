class Solution:
    def reverseString(self, s: List[str]) -> None:
        """
        Do not return anything, modify s in-place instead.
        """
        for i in range(len(s)//2):
            tmp = s[i]
            s[i] = s[len(s)-1-i]
            s[len(s)-1-i] = tmp

        return s


sol = Solution()
print(sol.reverseString(['1','2','3','4','5','6']))