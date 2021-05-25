/**
 * @param {string} s
 * @return {boolean}
 */
// best solution : use pointers to compare each value without editing the string
 var isPalindrome = function(s) {
    purifiedS = s.replace(/[^a-zA-Z0-9]*/g, '').toLowerCase()

    for (let i = 0; i < purifiedS.length; i++) {
        
        if(purifiedS[i] !== purifiedS[purifiedS.length-1-i])
            return false
    }

    return true
};

console.log(isPalindrome('A man, a plan, a canal: Panama'))