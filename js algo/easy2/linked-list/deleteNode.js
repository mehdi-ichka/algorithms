const H = require("./helpers/arraysAndNodes")

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
 var deleteNode = function(node) {
    while(node.next.next != null) {

        node.val = node.next.val
        node = node.next
    }

    node.val = node.next.val
    node.next = node.next.next
};

var nodes = new H.ListNode(1, new H.ListNode(2, new H.ListNode(3, new H.ListNode(4, new H.ListNode(5, new H.ListNode(6, null))))))

var node = nodes.next.next.next // 4

var res = deleteNode(node)

console.log(H.nodeToArray(nodes))


