/**
 * @param {number} n
 * @return {string}
 */
 var countAndSay = function(n, res= "1") {
    
    if(n <= 1)
        return res
    
    var myRes = ""
    var count = 1

    // if(res.length == 1)
    //     return countAndSay(n-1, "11")

    for (let j = 0; j < res.length; j++) {
        while(res[j] == res[j+1]) {
            count++
            j++
        }

        myRes += count.toString() + res[j]
        count = 1
        
    }

    return countAndSay(n-1, myRes)

};

var n = 4

console.log(countAndSay(n))