/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
        k %= nums.length;
        var tmp = nums.splice(nums.length-k)
        console.log(tmp)
        nums.unshift(...tmp)
};

var nums = [-1 ,-100 ,3 ,99], k = 2
nums = [1,2], k = 5

var res = rotate(nums, k)
console.log(nums)