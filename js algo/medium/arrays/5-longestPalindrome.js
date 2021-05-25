/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    if(s.length <= 1)
        return s
    var ss = '&' + s.split("").map(x => x + '&').join("")
    var palindromRadiusSS = new Array(ss.length)
    var center = 0
    while (center < ss.length) {
        var radius = 0
        while(center - (radius+1) > 0 && center + (radius+1) < ss.length && ss[center - (radius+1)] == ss[center + (radius+1)]) {
            radius++
        }

        palindromRadiusSS[center] = radius
        
        center++
    }
    var maxRadius = Math.max(...palindromRadiusSS)
    var resSS = 2*palindromRadiusSS.indexOf(maxRadius)+1
    var startIndex = (resSS-1)/2
    var result = ss.slice(startIndex-maxRadius, startIndex+maxRadius+1).replace(/&/g, '')
    return result
};

var s = "bb"
var res = longestPalindrome(s)
console.log(res)
