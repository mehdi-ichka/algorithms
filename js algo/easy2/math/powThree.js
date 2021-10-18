/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfThree = function(n) {
    var epsilon = 10**(-10)
    if(((log3(n)+epsilon) % 1) <= 2*epsilon)
        return true
    
    return false
 }

 function log3(n) {
    return Math.log(n)/Math.log(3)
 }

 var n = 27
 console.log(isPowerOfThree(n))