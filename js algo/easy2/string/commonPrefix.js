/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    if(strs.length <= 1)
        return strs[0]
    var j=0
    var i=-1
    do {
        i++
        if(i == strs.length-1) {
            i=0
            j++
        }
        
    } while (strs[i][j] == strs[i+1][j])

    return strs[0].slice(0, j)
};

var strs = ["flower","flow","flight"]
console.log(longestCommonPrefix(strs))