// /**
//  * @param {string} s
//  * @return {boolean}
//  */
//  var isValid = function(s, i=0) {
//    open = ['(', '[', '{']
//    close = [')', ']', '}']

//    if(open.includes(s[i]))
//       isValid(s, ++i)

//    if(close.includes(s[i])) {
//       var isparanthese = open.indexOf(s[i-1]) && open.indexOf(s[i-1]) == close.indexOf(s[i])
//       if(isparanthese)
//          return isValid(s., --i)
//    }

//    return true
   
// };

/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
   open = ['(', '[', '{']
   close = [')', ']', '}']
   var stack = []

   for (let i = 0; i < s.length; i++) {
      
      if(close.includes(s[i])) {
         var top = stack[stack.length-1]
         var isparanthese = open.includes(top) && open.indexOf(top) == close.indexOf(s[i])
         if(isparanthese)
            stack.pop()
         else 
            return false
      }
      
      if(open.includes(s[i]))
         stack.push(s[i])
   }

   return true
   
};


// "([)]"
// "{[]}"
// "()[]{}"
var res = isValid("()[]{}")
console.log(res)