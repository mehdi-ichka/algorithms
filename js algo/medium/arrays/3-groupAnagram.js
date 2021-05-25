/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {

    var i = 1
    // var j = 0
    var res = [[strs[0]]]
    while(strs.length > 0) {

        if(isAnagram(strs[0], strs[i])) {
            res[res.length-1].push(strs[i])
            strs.splice(i, 1)
        }

        if(i >= strs.length) {
          i = 1
          strs.splice(0, 1)
          if(strs.length == 0)
            break
          res[res.length] = [strs[0]]
        } else 
            i++
    }

    return res
};

function toCode(str) {
    return Array.from(str).map(c => c.charCodeAt())
}

function isAnagram(...strsParams) {
    
    if(!strsParams.every(str => str && str.length === strsParams[0].length))
        return false

    strs = strsParams.map(toCode)
    var res = 0

    res ^= strs.flat().reduce((acc, curr) => acc ^= curr, 0)

    return res == 0
}

var strs  = ["",""]
var res = groupAnagrams(strs )
console.log(res)
