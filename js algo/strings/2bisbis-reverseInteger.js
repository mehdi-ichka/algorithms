
/**
 * @param {number} x
 * @return {number}
 */
 var imax = 0
 function reverse(x, i=0, acc=0) {

    var a = Math.abs(x)

    if (Math.floor(a/10**i) > 0) {

        acc = reverse(x, ++i, acc)
        if (Math.abs(acc) > Math.pow(2, 31))
            return 0
    }
    else {
        return x < 0 ? -1*acc: acc;
    }
    imax = Math.max(i, imax)
    
    var facteur = Math.floor(a/10**(i-1))%10 * 10**(imax-i)

    var resut = x < 0 ? (acc - facteur) : (acc + facteur)

    return resut
};

var res = reverse(1)
console.log(res)