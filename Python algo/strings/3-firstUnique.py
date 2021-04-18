class Solution:
    def firstUniqChar(self, s: str) -> int:

        map = {}
        for i, val in enumerate(s):
            if map.get(val) == None:
                map[val] = 1  
            else:
                 map[val]+=1

        for key, value in map.items():
            if value == 1:
                return s.index(key)
                
        return -1

sol = Solution()
print(sol.firstUniqChar('31233'))