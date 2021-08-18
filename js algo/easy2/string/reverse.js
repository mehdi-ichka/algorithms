/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s) {
    
    for (let i = 0; i < parseInt(s.length/2); i++) {
        
        [s[i], s[s.length-1-i]] = [s[s.length-1-i], s[i]]
        
    }

    return s

};

var s = ["H","a","n","n","a","h"]

console.log(reverseString(s))