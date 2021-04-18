/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
    if(needle == "")
        return 0
    var j = 0
    for (let i = 0; i < haystack.length; i++) {
        
        if(needle[j] == haystack[i]) {
           
            if(j == needle.length - 1)
                return i-j
            j++

        } else {
            i = i-j
            j = 0
        }
    }

    return -1
};

var x = strStr("hello", "ll")
console.log(x)