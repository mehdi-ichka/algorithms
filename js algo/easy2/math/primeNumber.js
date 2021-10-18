
var countPrimes = function(n) {

    if(n <= 2)
        return 0

    var primes = Array(n).fill(true)
    var counter = 0
    for (let i = 2; i*i < n; i++) {
        
        if(primes[i]) {

            for (let j = i*i; j < n; j+=i)
                primes[j] = false
        }
    }

    for (let i = 2; i < n; i++) {
        if(primes[i]) 
            counter++
    }

    return counter
}

var res = countPrimes(15)

console.log(res)