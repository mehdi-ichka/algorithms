/**
 * @param {number} n
 * @return {string}
 */
 var countAndSay = function(n, cur='1') {
    if(n == 1)
        return cur

    var c = 0
    var str = ''
    for (let j = 0; j < cur.length; j++) {
        c++
        if(cur[j] !== cur[j+1]) {
            str += `${c}${cur[j]}` 
            c = 0
        }
    }

    return countAndSay(n-1, str)
    

};
var x = countAndSay(5)
console.log(x)