const H = require("./helpers/arraysAndNodes")
// A REFAIRE
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    var tail = head
    var curr = head

    head.next.next = head
    head.next = null
    
    tail.next = null
    
    return curr

 }

var head = new H.ListNode(1, new H.ListNode(2, new H.ListNode(3, new H.ListNode(4, new H.ListNode(5, null)))))

// var node = nodes.next.next.next // 4

var res = reverseList(head)

console.log(H.nodeToArray(res))
