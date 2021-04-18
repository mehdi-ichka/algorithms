/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
    var len = nums.length;

    for (var i=nums.length - 1; i >= 0; i--) {
        nums[(i + k)] = nums[i]
    }

    for(var i = k-1; i >= 0; i--) {
        nums[i] = nums[(nums.length - k + i)]
    }
    
    nums.length = len
};

var nums = [1,2,3,4,5,6]
rotate(nums, 4)

console.log(nums)