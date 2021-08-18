/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    
    var alpha = "abcdefghijklmnopqrstuvwxyz0123456789"
    var l = 0
    var h = s.length-1

    while (l<h) {
        
        while(l<h && !alpha.includes(s[l].toLowerCase())) {
            l++
        }

        while(l<h && !alpha.includes(s[h].toLowerCase())) {
            h--
        }

        if(l<h && s[h].toLowerCase() !== s[l].toLowerCase())
            return false

        l++
        h--
    }

    return true

};

var s = "0P"
console.log(isPalindrome(s))