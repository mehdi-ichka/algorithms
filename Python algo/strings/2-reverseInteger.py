class Solution:
    def reverse(self, x: int) -> int:
        aList = []
        a = abs(x)
        i=0

        while(a//pow(10, i) > 0):
            aList.append(a//pow(10,i)%10)
            i+=1
        
        acc = 0
        for j in range(len(aList)):
            acc += aList[len(aList)-1-j]*pow(10,j)
        
        if x<0: acc = -1*acc

        return acc if abs(acc) <= pow(2,31) else 0 

sol = Solution()
print(sol.reverse(123))