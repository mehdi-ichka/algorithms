var rob = function(nums, memo={}) {
    removeZeroes(nums)
    if(nums.length == 0)
        return 0
    if(nums.length == 1)
        return nums[0]
    if(nums.length == 2)
        return Math.max(nums[0], nums[1])

    
    var resN = memo[nums.slice(0, nums.length-2).toString()]
                ? memo[nums.slice(0, nums.length-2).toString()]
                : rob(nums.slice(0, nums.length-2), memo)

    var resN_1 = memo[nums.slice(0, nums.length-1).toString()]
                ? memo[nums.slice(0, nums.length-1).toString()]
                : rob(nums.slice(0, nums.length-1), memo)

    memo[nums.toString()] = Math.max(resN + nums[nums.length-1], resN_1)

    return memo[nums.toString()]
};

function removeZeroes(nums) {
    var i=0
    while(nums[i] == 0) { nums.splice(i, 1); i++; }
    i=nums.length-1
    while(nums[i] == 0) { nums.splice(i, 1); i--; }
}

nums = [0]

var res = rob(nums)
console.log(res)

