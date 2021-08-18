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
 var isSymmetric = function(root) {
     if(root == null)
        return true

    var queue = [root.left, root.right]

    while(queue.length > 0) {
        var right = queue.shift()
        var left = queue.shift()

        if(right == left)
            continue

        if( right == null || left == null || right.val !== left.val)
            return false
        

        queue.push(right.right)
        queue.push(left.left)
        queue.push(right.left)
        queue.push(left.right)
    }

    return true

};

var root = [1,2,2,null,3,null,3]

root = H.arrayToTree(root)

var res = isSymmetric(root)

console.log(res)