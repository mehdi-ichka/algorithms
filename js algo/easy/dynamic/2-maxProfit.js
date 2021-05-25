// BRUTE FORCE
// var maxProfit = function(prices) {
//     var max = 0
//     for (var b=0; b < prices.length-1; b++) {
//         for (var s=b+1; s < prices.length; s++) {
//             var profit = prices[s] - prices[b];
//             if (profit > max)
//                 max = profit;
//         }
//     }
//     return max
// };

/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {

    var maxProfit=0, min=Number.MAX_VALUE
    
    for (var i=0; i < prices.length; i++) {
        if(prices[i] < min) {
            min = prices[i]
            continue
        }
        
        if(maxProfit < prices[i]-min)
            maxProfit = prices[i]-min
    }

    return maxProfit
};

prices = [2,4,1,2]
var res = maxProfit(prices)

console.log(res)