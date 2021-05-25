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
 var isValidBST = function(root, low=null, high=null) {

    if(root == null)
        return true

    if(low != null && low.val >= root.val)
        return false

    if(high != null && high.val <= root.val)
        return false
    
    var isValidLeft = isValidBST(root.left, low, root)
    var isValidRight = isValidBST(root.right, root, high)
    
    return isValidLeft && isValidRight
};

var root = [5,1,6,null,null,4,7]

root = H.arrayToTree(root)

var res = isValidBST(root)

console.log(res)