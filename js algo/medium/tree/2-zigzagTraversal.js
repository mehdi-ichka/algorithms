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
 var zigzagLevelOrder = function(root) {
    if(!root)
        return []
    
   var queue = [root]
   var res = []
   var depth = 0
   var reverse = false
   while(queue.length > 0) {
       var queueLength = queue.length
        for (let i = 0; i < queueLength; i++) {
                
            root = queue.shift()

            res[depth] = res[depth] ? res[depth].concat(root.val) : [root.val]
            if(reverse) {
                if(root.right)
                    queue.push(root.right)

                if(root.left)
                    queue.push(root.left)
            } else {
                
                if(root.left)
                queue.push(root.left)

                if(root.right)
                    queue.push(root.right)
            }
            reverse = !reverse
        }
       
       depth++
   }

   return res
};

var root = [1,2,null,3,null,4,null,5]

root = H.arrayToTree(root)

var res = zigzagLevelOrder(root)

console.log(res)
