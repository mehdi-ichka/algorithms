/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {
    var map = {}
    for (let i = 0; i < s.length; i++)
        map[s[i]] == undefined ? map[s[i]] = 1 : map[s[i]]++

    var entry = Object.entries(map).find(entry => entry[1] === 1)

    return entry == undefined ? -1 : s.indexOf(entry[0])
};

var s = "leetcode"

console.log(firstUniqChar(s))