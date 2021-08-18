/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    
    var res = nums[0]

    for (let i = 1; i < nums.length; i++) {
        res ^= nums[i]
    }

    return res
};

var nums = [4,1,2,1,2]
console.log(singleNumber(nums))