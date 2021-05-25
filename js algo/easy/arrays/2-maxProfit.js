/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var profit = 0
    var j = 0
    for (var i=0; i < prices.length - 1; i++) {
        if (prices[i] > prices[i+1]) {
            profit += prices[i] - prices[j]
            j = i + 1
        }
    }
    
    profit += prices[prices.length - 1] - prices[j]

    return profit
};

console.log(maxProfit([1,2,3,4,5]))