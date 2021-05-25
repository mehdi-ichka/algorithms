const H = require("./helpers/arraysAndNodes")

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var mergeTwoLists = function(l1, l2) {
    var head = new H.ListNode(0, null)
    var p = head

    while (l1 != null && l2 != null) {
        if (l1.val >= l2.val) {
            head.next = new H.ListNode(l2.val, null)
            l2 = l2.next
        }
        else {
            head.next = new H.ListNode(l1.val, null)
            l1 = l1.next
        }

        head = head.next
    }

    var remainder = l1 == null ? l2 : l1

    while(remainder != null) {
        head.next = new H.ListNode(remainder.val, null)
        head = head.next
        remainder = remainder.next
    }

    return p.next;
};

var l1 = [1,2,4]
var l2 = [1,3,4]

l1 = H.arrayToNode(l1)
l2 = H.arrayToNode(l2)

var res = mergeTwoLists(l1, l2)

console.log(H.nodeToArray(res))