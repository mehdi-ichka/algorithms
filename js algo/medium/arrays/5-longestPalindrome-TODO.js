/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    var left = 0, right = s.length-1
    var maxPalindrome = ""
    var stack = []
    var dic = new Map()
    stack.push({l: left, r: right})

    while (stack.length !== 0) {

        left = stack[stack.length-1].l
        right = stack[stack.length-1].r

        if(s[left] !== s[right]) {
            left = stack[stack.length-1].l
            right = stack[stack.length-1].r
            stack.pop()
            stack.push({l: left+1, r: right})
            stack.push({l: left, r: right-1})
 
        } else if(s[left] === s[right]) {
            while(s[left] === s[right] && left < right) {
                left++
                right--
            }
            if(left >= right) {
                if(maxPalindrome.length < stack[stack.length-1].r - stack[stack.length-1].l + 1)
                    maxPalindrome = s.slice(stack[stack.length-1].l, stack[stack.length-1].r + 1)
                left = stack[stack.length-1].l
                right = stack[stack.length-1].r
                stack.pop()
            } else {
                left = stack[stack.length-1].l
                right = stack[stack.length-1].r
                stack.pop()
                stack.push({l: left+1, r: right})
                stack.push({l: left, r: right-1})
            }
        }
    }

    return maxPalindrome
};


var s = "babaddtattarrattatddetartrateedredividerb"

var res = longestPalindrome(s)
console.log(res)

// "acabbadavadda"

if(s.length <= 1)
    return s

