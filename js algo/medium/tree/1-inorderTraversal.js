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
 * @return {number[]}
 */
 function inorderTraversal (root) {

    var stack = []
    var res = []
    while (root !== null || stack.length > 0) {
        while(root) {
            stack.push(root)
            root = root.left
        }

        root = stack.pop()
        res.push(root.val)

        root = root.right
    }

    return res
};

var root = [2,3,null,1]
var array = []

root = H.arrayToTree(root)

var res = inorderTraversal(root)

console.log(res)
