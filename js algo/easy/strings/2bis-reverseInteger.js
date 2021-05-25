/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {

    var list = []

    var a = Math.abs(x)

    var i = 0
    while(Math.floor(a/10**i) > 0) {
        
        list.push(Math.floor(a/10**i)%10)
        i++;
    }

    var acc = 0

    for (let j = 0; j < list.length; j++) {
        
        acc += list[list.length-1-j]*10**j
    }

    if(x < 0)
        acc = -1*acc

    return Math.abs(acc) > Math.pow(2, 31) ? 0 : acc
};

var res = reverse(123)
console.log(res)