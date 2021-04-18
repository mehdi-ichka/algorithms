import re

class Solution:
    def isPalindrome(self, s: str) -> bool:
        s = re.sub(r'[^a-zA-Z0-9]*', '', s).lower()

        for i in range(len(s)):
            if s[i] != s[len(s)-1-i]:
                return False

        return True

s = "A man, a plan, a canal: Panama"
sol = Solution()
print(sol.isPalindrome(s))