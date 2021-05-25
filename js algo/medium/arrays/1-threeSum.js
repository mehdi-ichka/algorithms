/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    var res = new Map()

    for (let i = 0; i < nums.length; i++) {
        var x = nums[i]
        var set = new Set()

        for (let j = i+1; j < nums.length; j++) {
            var key = [x, nums[j], -nums[j]-x].sort().toString()

            if(set.has(-nums[j]-x) && !res.get(key)) {
                res.set(key, [x, nums[j], -nums[j]-x])
            }

            set.add(nums[j])
        }
    }

    return [...res.values()]
};

var nums = [-1,0,1,2,-1,-4]
var res = threeSum(nums)
console.log(res)


// BEST SOLUTION
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//  var threeSum = function(nums) {
//     var target=0;
//     nums.sort(function(a,b){return a-b});
//      var arr=[];
//      var sum=0;
//      for(let i=0;i<nums.length;i++){
//              var left=i+1
//              var right=nums.length-1;
//              while(left<right){
//                  sum = nums[i] + nums[left] + nums[right];
//                  if (sum === target) {
//                      arr.push([nums[i], nums[left], nums[right]]);
//                      while (nums[left] === nums[++left]);
//                      while (nums[right] === nums[--right]);
//                  }
//                  else if (sum > target) right--;
//                  else left++;
//          }
//          while(nums[i] === nums[i + 1]) i++;
//      }
//      return arr
//  };