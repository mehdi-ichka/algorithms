/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
 var hammingDistance = function(x, y) {
    return hammingWeight(x^y)
};

var hammingWeight = function(n) {
    var res=0
    while(n != 0) {
        n = n&n-1
        res++
    }
    
    return res
};