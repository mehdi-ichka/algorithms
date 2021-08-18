/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    
    var length = nums.length
    let i = 0
    let counter = 0
    while (counter < length) {
        counter++
        if(nums[i] === 0) {
            nums.splice(i, 1)
            nums.push(0)
        } else
            i++
        
    }

    return nums

};

var nums = [0,0,1]
var res = moveZeroes(nums)

console.log(res)