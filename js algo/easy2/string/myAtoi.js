/**
 * @param {string} s
 * @return {number}
 */
 var myAtoi = function(s) {

    var isValid = s.match(/^\s*(\+|-)?\d+.*$/)
    if(!isValid)
        return 0

    var match = s.match(/^\s*(\+|-)?\d+/)
    if(match == null)
        return 0

    var x = parseInt(match[0])

    if(x > 2**31 - 1)
        return 2**31 - 1

    if(x < -1*2**31)
        return -1*2**31

    return x

};

console.log(myAtoi("4193 with words"))