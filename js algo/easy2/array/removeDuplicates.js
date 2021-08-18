/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    var j = 1
    for (let i = 0; i < nums.length-1; i++) {
        if(nums[i] !== nums[i+1]) {
            nums[j] = nums[i+1]
            j++ 
        }
    }

    return j
};

var nums = [0,0,1,1,1,2,2,3,3,4]

var res = removeDuplicates(nums)

console.log(res)
console.log(nums)