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
 var maxDepth = function(root) {
    
    var stack = [{node: root, depth: 1}]
    var maxDepth = 0

    while(stack.length > 0) {
        var curr = stack.pop()

        if(curr.node.left == null && curr.node.right == null) {
            maxDepth = Math.max(maxDepth, curr.depth)
            continue
        }

        if(curr.node.right !== null)
            stack.push({node: curr.node.right, depth: curr.depth+1})

        if(curr.node.left !== null)
            stack.push({node: curr.node.left, depth: curr.depth+1})
    }

    return maxDepth
};

 var maxDepthRec = function(root, depth=0) {

    if(root == null)
        return depth
    
    var leftDepth = maxDepthRec(root.left, depth+1)
    var rightDepth = maxDepthRec(root.right, depth+1)

    return Math.max(leftDepth, rightDepth)
};


var root = [3,9,20,null,null,15,7]

root = H.arrayToTree(root)

var res = maxDepthRec(root)

console.log(res)