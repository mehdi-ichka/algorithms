/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
    if(needle == "")
        return 0
    
    var res = haystack.match(new RegExp(needle))
    
    return res ? res.index : -1
};

var x = strStr("hello", "ll")
console.log(x)