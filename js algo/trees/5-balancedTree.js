const H = require("./helpers/arraysAndTrees")

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

 var sortedArrayToBST = function(nums, start=0, end=nums.length-1) {
    
   if(start > end)
       return null
   
   var mid = Math.floor((start+end)/2)
   var root = new H.TreeNode(nums[mid])
   root.left = sortedArrayToBST(nums, start, mid-1)
   root.right = sortedArrayToBST(nums, mid+1, end)
   
   return root
};

var nums = [-10,-3,0,5,9]

var root = sortedArrayToBST(nums)

console.log(root)