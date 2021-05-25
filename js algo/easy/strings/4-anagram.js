/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    if(s.length !== t.length)
        return false
    
    var map = {}
    for (let i = 0; i < s.length; i++)
        map[s[i]] == undefined ? map[s[i]] = 1 : map[s[i]]++
    
    for (let i = 0; i < t.length; i++) {
        if(map[t[i]] !== undefined)
            map[t[i]]--
        else
            return false
    }
    
    for (const x of Object.entries(map)) {
        if(map[x[0]] !== 0)
            return false
    }

    return true
};

var s = "anagram"; var t = "nagarm"

console.log(isAnagram(s, t))