/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    var i = 0
    var res = 0

    while(i < prices.length-1) {
        while(prices[i] >= prices[i+1]) {
            i++
        }

        var x = prices[i]

        while(prices[i] <= prices[i+1]) {
            i++
        }

        if(i < prices.length)
            res += prices[i] - x
    }

    return res
};

var prices = [7,6,4,3,1]

var res = maxProfit(prices)

console.log(res)