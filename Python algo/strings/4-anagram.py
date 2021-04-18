class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        
        map = {}

        for i, val in enumerate(s):
            map[val] = map[val] + 1 if val in map  else 1
        
        for i, val in enumerate(t):
            if val not in map:
                return False
            map[val] -= 1
                
        
        for x in map:
            if map[x[0]] != 0:
                return False

        return True

s = "anagram"
t = "nagarma"

sol = Solution()
print(sol.isAnagram(s, t))