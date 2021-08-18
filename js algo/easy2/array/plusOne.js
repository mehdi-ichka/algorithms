/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {

    var i = digits.length - 1

    while(digits[i] == 9) {
        digits[i] = 0
        i--
    }

    if(i == -1) {
        digits.unshift(1)
        return digits
    }

    digits[i]++
    return digits
};

var digits = [4,3,2,1]

console.log(plusOne(digits))