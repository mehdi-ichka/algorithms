/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    var res = new Set()

    for (let i = 0; i < nums.length; i++) {
        var x = nums[i]
        var set = new Set()

        for (let j = i+1; j < nums.length; j++) {
            if(set.has(-nums[j]-x))
                res.add([x, nums[j], -nums[j]-x])

            set.add(nums[j])
        }
    }

    return res
};

var nums = [-1,,10,2,-1,-4]
var res = threeSum(nums)
console.log(res)

// [0,1,2,3,0,-3]