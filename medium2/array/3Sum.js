/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {

    nums.sort((a,b) => a-b)

    var res = []
    for (let i = 0; i < nums.length; i++) {
        
        if(i != 0 && nums[i] == nums[i-1])
            continue

        var x = nums[i]
        var start = i+1
        var end = nums.length-1

        while(start < end) {
            var y = nums[start]
            var z = nums[end]

            if(x+y+z == 0) {
                res.push([x, y, z])
            }

            if(x+y+z < 0) {
                var currStart = start
                while(start < end && nums[start] == nums[currStart])
                    start++
            } else {
                var currEnd = end
                while(start < end && nums[end] == nums[currEnd])
                    end--
            }
        }
    }

    return res

};

var nums = [-2,0,0,2,2]

console.log(threeSum(nums))
