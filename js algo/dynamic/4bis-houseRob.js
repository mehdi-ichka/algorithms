
/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums, memo={}) {
    if(nums.length == 0)
        return 0
    if(nums.length == 1)
        return nums[0]
    if(nums.length == 2)
        return Math.max(nums[0], nums[1])

    var dp = []
    dp[0] = nums[0]
    dp[1] = Math.max(nums[0], nums[1])

    for (let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(dp[i-2] + nums[i], dp[i-1])
    }

    return dp[nums.length-1]
};

nums = [4,1,5,7,2,3,1]
nums = [2,7,9,3,1]

var res = rob(nums)
console.log(res)

max=4
max=4+2