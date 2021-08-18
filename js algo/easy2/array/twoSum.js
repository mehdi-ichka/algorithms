/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    
    var map = new Map()
    for (let i = 0; i < nums.length; i++) {
        var value = target - nums[i]
        map.set(value, i)
    }

    for (let i = 0; i < nums.length; i++) {
        var index = map.get(nums[i])
         if(index != null && index !== i)
            return [i, index]
    }

};

var nums = [3,2,4], target = 6
var res = twoSum(nums, target)

console.log(res)