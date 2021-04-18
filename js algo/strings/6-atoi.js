/**
 * @param {string} s
 * @return {number}
 */
 var myAtoi = function(s) {
    
    var isValid = s.match(/^\s*(\+|\-)?(\d)+([a-zA-Z0-9]|\+|\-|\.|\s)*$/)
    if(!isValid)
        return 0

    s = s.match(/(\d|\+|\-)([0-9])*/)

    var x = parseInt(s[0])

    if(x > 2**31 - 1)
        return 2**31 - 1
    
    if(x < -1*2**31)
        return -1*2**31

    return x
};
var res = myAtoi("3.14159")
console.log(res)