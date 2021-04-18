
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        profit = 0
        i = 0
        j = 0
        print(prices[:len(prices) - 1])
        for i, _ in enumerate(prices[:len(prices) - 1]):
            if prices[i] > prices[i+1]:
                profit += prices[i] - prices[j]
                j = i + 1
        
        profit += prices[len(prices) - 1] - prices[j]

        return profit

sol = Solution()
print(sol.maxProfit([1,2,3,4,5]))
