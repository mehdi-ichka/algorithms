/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s) {
    
    for (let i = 0; i < parseInt(s.length/2); i++) {
        var tmp = s[i]
        s[i] = s[s.length-1-i]
        s[s.length-1-i] = tmp
    }
};

var x = ["h","e","l","l","o"]
reverseString(x)
console.log(x)