/**
 * @param {number} n
 * @return {number}
 */
 var countPrimes = function(n) {
    if (n == 1 || n == 2)
        return 0 

    var primes = new Array(n).fill(true)

    for (let i=2; i*i<=n; i++) {
        if(primes) {
            for(let j=i; i*j<=n; j++) {
                primes[i*j] = false
            }
        }
    }

    return primes.filter(p => p).length - 2
};

console.log(countPrimes(15))