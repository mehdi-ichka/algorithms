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
 var isSymmetric = function(leftroot, rightroot) {
     if(leftroot == null && rightroot == null)
        return true

     if(leftroot == null && rightroot != null || leftroot != null && rightroot == null)
        return false

     if(leftroot.val !== rightroot.val)
        return false

    var isSym = isSymmetric(leftroot.left, rightroot.right)
    var isSym2 = isSymmetric(leftroot.right, rightroot.left)

    return isSym && isSym2
};

var root = [1,2,2,3,4,4,3]

root = H.arrayToTree(root)

var res = isSymmetric(root, root)

console.log(res)