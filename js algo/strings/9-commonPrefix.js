/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {

    var len = Math.max(...strs.map(str => str.length))

    var pref = 0
    while(pref < len) {
        for (let i = 0; i < strs.length-1; i++) {

            if(strs[i][pref] !== strs[i+1][pref])
                return strs[0].slice(0, pref)
        }
        pref++
    }

    return pref === len ? strs[0] : ""
};

var strs = ["flower","flower","flower","flower"]
var res = longestCommonPrefix(strs)
console.log(res)