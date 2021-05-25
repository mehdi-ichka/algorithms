/**
 * @param {number} n
 * @return {string}
 */
 var countAndSay = function(n) {
    
    var cur = '1'

    for (let i = 1; i < n; i++) {
        
        var c = 0
        var aList = []
        for (let j = 0; j < cur.length; j++) {
            
            if(cur[j] !== cur[j+1]) {
                aList.push(cur.slice(c, j+1))
                c = j+1
            }
        }

        cur = aList.map(el => `${el.length}${el[0]}`).join('')
    }

    return cur;

};
var x = countAndSay(1)
console.log(x)