/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n, memo={}) {
    if(n==0 || n == 1)
        return 1
    if(memo[n])
        return memo[n]
    memo[n] = climbStairs(n-1, memo) + climbStairs(n-2, memo) 
    return memo[n]
};

var res = climbStairs(45)
console.log(res)

// BEST MEMORY: Iterative
// var climbStairs = function(n) {
//     if (n == 1 || n == 0) return 1;
    
//     let first = 1;
//     let second = 2;
    
//     for (let i = 3; i <= n; i++) {
//         let third = first + second;
//         first = second;
//         second = third;
//     }
    
//     return second;
// };