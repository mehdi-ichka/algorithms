function treeToArray(tree, array, i=0) {
    if(tree == null)
        return i
    
    array[i] = tree.val;
    i++;

    if(tree.left != null)
        i = treeToArray(tree.left, array, i);
    if(tree.right != null)
        i = treeToArray(tree.right, array, i);

    return i
}

function arrayToTree(array, root, i=0) {

    if(i>=array.length)
        return root
    if(array[i] == null)
        return null
        
    root = new TreeNode(array[i])

    root.left = arrayToTree(array, root.left, 2*i+1)
    root.right = arrayToTree(array, root.right, 2*i+2)

    return root;
}

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

module.exports = {arrayToTree, treeToArray, TreeNode}
