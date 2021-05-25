// CHECK LEETCODE SOLUTION FOR BEST ANSWER
/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var increasingTriplet = function(nums) {

     var center = 1

    while(center <= nums.length-2) {
        var start=center-1
        var end=center+1

        while(nums[center] <= nums[start]) {
            if(start <= 0) {
                center++
                if(center > nums.length-2)
                    return false
                start=center-1
                end=center+1
            } else {
                start--
            }

        }
            

        while(nums[center] >= nums[end]) {
            if(end > nums.length-1) {
                center++
                if(center > nums.length-2)
                    return false
                start=center-1
                end=center+1
            } else {
                end++
            }

        } 
        
        if(start >= 0 && end <= nums.length-1)
            return true

        center++
    }
    return false
};

var nums = [2,1,5,0,4,6]
var res = increasingTriplet(nums)
console.log(res)
