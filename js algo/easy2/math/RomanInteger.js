/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    
    var dic = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}

    var res = 0
    for (var i = 0; i < s.length-1; i++) {
        
        if( dic[s[i]] < dic[s[i+1]] )
            res += -dic[s[i]]
        else
            res += dic[s[i]]
    }

    res += dic[s[i]]

    return res
}

var s = "IX"

var res = romanToInt(s)
console.log(res)

11111111111111111111111111111101
00000000000000000000000000000011
                              00