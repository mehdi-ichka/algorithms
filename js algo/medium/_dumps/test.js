

function toCode(str) {
    return Array.from(str).map(c => c.charCodeAt())
}

function isAnagram(...strsParams) {
    
    if(!strsParams.every(str => str && str.length === strsParams[0].length))
        return false

    strs = strsParams.map(toCode)
    var res = 0

    res ^= strs.flat().reduce((acc, curr) => acc ^= curr, 0)

    return res == 0
}

var strs  = ["aa","bb"]
var res = isAnagram(strs)
console.log(res)
