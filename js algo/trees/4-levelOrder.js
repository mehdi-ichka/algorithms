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
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var levelOrder = function(root, depth=0, array=[]) {
   if (root == null)
      return
   
   if(array[depth])
      array[depth].push(root.val)
   else
      array[depth] = [root.val]
   
   depth++

   levelOrder(root.left, depth, array)
   levelOrder(root.right, depth, array)

   return array
};

var root = [3,9,20,null,null,15,7]

root = H.arrayToTree(root)

var res = levelOrder(root)

console.log(res)