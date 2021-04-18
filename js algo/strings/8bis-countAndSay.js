/**
 * @param {number} n
 * @return {string}
 */
 var countAndSay = function(n) {
    
    var cur = '1'

    for (let i = 1; i < n; i++) {
        
        var c = 0
        var str = ''
        for (let j = 0; j < cur.length; j++) {
            c++
            if(cur[j] !== cur[j+1]) {
                str += `${c}${cur[j]}` 
                c = 0
            }
            
        }
        cur = str
    }

    return cur;

};
var x = countAndSay(5)
console.log(x)