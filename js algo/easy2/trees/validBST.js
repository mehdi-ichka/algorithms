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
 * @return {boolean}
 */
 var isValidBST = function(root,min=-Infinity, max=Infinity) {
    
    if(root == null)
        return true

    if(root.val <= min || root.val >= max)
        return false

    if(isValidBST(root.left, min,  Math.min(max, root.val)) == false)
        return false

    if(isValidBST(root.right, Math.max(min, root.val),  max) == false)
        return false
    
    return true
};


var root = [0]

root = H.arrayToTree(root)

var res = isValidBST(root)

console.log(res)