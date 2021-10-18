/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums, i=0, memo={}) {

    if(i in memo)
        return memo[i]

    if(i >= nums.length )
        return 0
    if(i == nums.length-2)
        return Math.max(nums[i], nums[i+1])

    if(i == nums.length-1)
        return nums[i]

    var maxRob = Math.max(nums[i] + rob(nums, i+2, memo), rob(nums, i+1, memo))
    memo[i] = maxRob
    return maxRob
};

var nums = [1,2,3,1]

var res = rob(nums)
console.log(res)