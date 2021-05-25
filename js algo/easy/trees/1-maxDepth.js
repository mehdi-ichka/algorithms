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
 * @return {number}
 */
var maxDepth = function(root, depth=0) {
    if(root == null) {
        return 0
    }

    depth++

    var leftDepth = maxDepth(root.left, depth)

    var rightDepth = maxDepth(root.right, depth)

    return Math.max(depth, Math.max(leftDepth, rightDepth))
};

var root = [3,9,20,null,null,15,7]
var array = []

root = H.arrayToTree(root)

var res = maxDepth(root)

console.log(res)
