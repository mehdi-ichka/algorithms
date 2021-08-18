/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {

    var y = x < 0 ? -x : x
    var res = 0
    while(y/10 > 0) {
        res = res*10 + y%10
        y = (y - y%10)/10
    }
    if(res > 2**31 - 1 || res < -1*2**31)
        return 0
    return x < 0 ? -res : res
};

var x = 120
console.log(reverse(x))