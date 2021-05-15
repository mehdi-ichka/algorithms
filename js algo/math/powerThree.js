/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfThree = function(n) {
    if(n == 1)
        return true
    if(n%3 !== 0)
        return false
    if(n == 0)
        return false
    
    return isPowerOfThree(n/3)
};

console.log(isPowerOfThree(3**2))

// /**
//  * @param {number} n
//  * @return {boolean}
//  */
//  var isPowerOfThree = function(n) {
//     var x = log3(n).toFixed(10)
//     if(parseInt(x) == parseFloat(x))
//         return true
//     return false
// };
     
// var log3 = (a) => Math.log(a)/Math.log(3)
// BETTER APPROCH IS TO COMPARE WITH EPSILON INSTEAD OF isFixed FUNCTION
