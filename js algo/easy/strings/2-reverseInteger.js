/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    
    var str = Math.abs(x).toString().split('')

    for (let i = 0; i < Math.floor(str.length/2); i++) {
        var tmp = str[i]
        str[i] = str[str.length-1-i]
        str[str.length-1-i] = tmp
    }
    
    var result =  x<0 ? -1*parseInt(str.join('')): parseInt(str.join(''))

    return Math.abs(result) > Math.pow(2, 31) ? 0 : result

};

var res = reverse(15543)
console.log(res)