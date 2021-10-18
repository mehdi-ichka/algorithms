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
 var levelOrder = function(root, lvl=0, arr=[]) {
    if(root == null)
        return null
    arr[lvl] = arr[lvl] == null ? [root.val] : arr[lvl].concat(root.val)

    if(root.left)
        levelOrder(root.left, lvl+1, arr)
    if(root.right)
        levelOrder(root.right, lvl+1, arr)

    return arr
};

root = []

root = H.arrayToTree(root)

var res = levelOrder(root)

console.log(res)