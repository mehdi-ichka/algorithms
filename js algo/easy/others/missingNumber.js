// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
//  var missingNumber = function(nums) {

//    var dic = {}
   
//    for (let i = 0; i < nums.length; i++) {
//       dic[nums[i]] = true
//    }

//    for (let i = 0; i <= nums.length; i++) {
//       if(!dic[i])
//          return i
//    }
// };

/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {

   var counter = [...Array(nums.length+1).keys()]

   var x = [...counter, ...nums]

   var res = x[0]
   for (let i = 1; i < x.length; i++)
      res ^= x[i]
   
   return res
};

var res = missingNumber([3,0,1])
console.log(res)