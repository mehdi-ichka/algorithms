/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    var mapA = {}
    var mapB = {}

    if(s.length !== t.length)
        return false

    for (let i = 0; i < s.length; i++) {

        mapA[s[i]] = s[i] in mapA ? mapA[s[i]]+1 : 0
        mapB[t[i]] = t[i] in mapB ? mapB[t[i]]+1 : 0
    }

    for (let i = 0; i < s.length; i++) {
        
        if(mapA[s[i]] !== mapB[s[i]])
            return false
        
    }

    return true

};

var s = "anagram", t = "nagaran"
console.log(isAnagram(s, t))