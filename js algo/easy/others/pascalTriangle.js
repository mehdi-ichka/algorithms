/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(num) {
    var res = [[1]]
   for (let i = 1; i < num; i++) {
      var next = []
      for (let j = 0; j <= res[i-1].length; j++) {
         next.push((res[i-1][j-1] || 0) + (res[i-1][j] || 0))
      } 
      res.push(next)
   }

   return res
};

var res = generate(5)
console.log(res)