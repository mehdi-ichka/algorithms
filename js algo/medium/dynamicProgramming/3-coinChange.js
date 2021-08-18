// TIME LIMIT EXCEEDED

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
 var coinChange = function(coins, amount) {
     
    return coinChange_rec(coins, amount)
   
    function coinChange_rec(coins, amount, memo={}) {
        if(amount in memo)
        return memo[amount];
    
       if(amount == 0) 
           return 0;

       if(amount < 0)
           return -1;

       var shortestComb = -1;

       for (const coin of coins) {

           var remainder = amount - coin;

           var remainderComb = coinChange_rec(coins, remainder, memo);
           if(remainderComb !== -1) {
               remainderComb++
               if(shortestComb === -1 || remainderComb < shortestComb) {
                   shortestComb = remainderComb;
               }
           }
       }

       memo[amount] = shortestComb;
       return shortestComb;
    }
};

var coins = [1,2,5], amount = 100

var res = coinChange(coins, amount)

console.log(res)