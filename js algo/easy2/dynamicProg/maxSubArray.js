// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
 var maxSubArray = function(nums) {

    var maxSums = []
    var nextSum = 0
    for (let i = 0; i < nums.length; i++) {

        nextSum = nums[i] + nextSum

        if(nextSum >= nums[i])
            maxSums[i] = nextSum
        else {
            maxSums[i] = nums[i]
            nextSum = nums[i]
        }
        
    }

    return Math.max(...maxSums)
    
};


var nums = [-2,1,-3,4,-1,2,1,-5,4]

var res = maxSubArray(nums)

console.log(res)