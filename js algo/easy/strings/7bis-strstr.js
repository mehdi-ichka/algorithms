/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
    if(needle == "")
        return 0
    
    for (let i = 0; i < haystack.length; i++) {
        
        if(needle[0] == haystack[i]) {
            var res = true
            for (let j = 1; j < needle.length; j++) {
                
                if(needle[j] !== haystack[i+j]) {
                    res = false
                    break
                }
            }

            if (res)
                return i
            
        }
    }

    return -1
};

var x = strStr("hello", "ll")
console.log(x)