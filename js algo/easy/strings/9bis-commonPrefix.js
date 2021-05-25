/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function(strs, pref=0) {

    var len = Math.max(...strs.map(str => str.length))

    if(pref >= len)
        return pref === len ? strs[0] : ""

    for (let i = 0; i < strs.length-1; i++) {

        if(strs[i][pref] !== strs[i+1][pref])
            return strs[0].slice(0, pref)
    }

    return longestCommonPrefix(strs, ++pref)
};

var strs = ["flow","flower","flower","flower"]
var res = longestCommonPrefix(strs)
console.log(res)