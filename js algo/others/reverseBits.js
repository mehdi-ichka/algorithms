// /**
//  * @param {number} n - a positive integer
//  * @return {number} - a positive integer
//  */
//  var reverseBits = function(n) {
//     var res = ''
//     var bin = n.toString(2).padStart(32, 0)
//     for (let i = 0; i < bin.length; i++) {
//         res+=bin[bin.length-i-1]
//     }

//     return parseInt(res, 2)
// };

//SHOULD WORK BUt IT DIDN'T !!!!!
// /**
//  * @param {number} n - a positive integer
//  * @return {number} - a positive integer
//  */
//  var reverseBits = function(n) {
//      var pos = 31
//      var res = 0
//      while(n !== 0) {
//         res+= ((n & 1) << pos) >>> 0
//         n >>= 1
//         pos--
//      }
     
//      return res
// };

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
 var reverseBits = function(n) {
    var pos = 31
    var res = 0
    while(n) {
       res+= (n & 1) * 2**pos
       n = n / 2
       pos -= 1
    }
    
    return res
};


var res = reverseBits(4294967293)
console.log(res)