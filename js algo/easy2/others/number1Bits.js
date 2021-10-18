/**
 * @param {number} n - a positive integer
 * @return {number}
 */
 var hammingWeight = function(n) {
    let countOnes = 0;
    while (n !== 0) {
        if (n & 1) {
            countOnes++;
        }
        n = n >> 1;
    }
    return countOnes;
};

 var n = 6
 console.log(hammingWeight(n))
