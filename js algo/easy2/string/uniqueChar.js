/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {
    var map = {}
    for (let i = 0; i < s.length; i++) {
        
        map[s[i]] = s[i] in map ? map[s[i]]+1 : 0
        
    }

    for (let i = 0; i < s.length; i++) {

        if (map[s[i]] == 0) {
            return i
        }
    }

    return -1

};

var s = "loveleetcode"
// s = "leetcode"
console.log(firstUniqChar(s))