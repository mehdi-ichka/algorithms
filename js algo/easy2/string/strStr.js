/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
    if(needle.length == 0)
        return 0
        
    var res = haystack.match(new RegExp(needle))

    return res ? res.index : -1

};

var haystack = "hello", needle = "ll"
console.log(strStr(haystack, needle))