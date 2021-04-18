/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {

    for (let i = 0; i < nums.length-1; i++) {
        
        for (let j = i+1; j < nums.length; j++) {
            
            if (nums[i] + nums[j] == target)
                return [i, j]
        }
    }
};

var res = twoSum([3,2,4], 6)
console.log(res)

//Best solution: add to dictionary each value () 
// O(n) - One-pass Hash Table
// var twoSum = function(nums, target) {
//     let map = new Map;
//     for (var i = 0; i < nums.length; i++) {
//         let complement = target - nums[i];
//         if (map.has(complement)) {
//             return [map.get(complement), i]
//         }
//         map.set(nums[i], i);
//     }
// }