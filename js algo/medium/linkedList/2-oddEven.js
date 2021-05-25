const H = require("./helpers/arraysAndNodes")
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
 var oddEvenList = function(head) {
    var res = new H.ListNode(head.val)
    var tmpRes = res
    var odd = head.next.next
    var even = head.next

    while(odd !== null) {
        tmpRes.next = new H.ListNode()

        tmpRes.next.val = odd.val
        tmpRes = tmpRes.next
        
        if(odd.next == null)
            break
        odd = odd.next.next
    }

    while(even !== null) {
        tmpRes.next = new H.ListNode()

        tmpRes.next.val = even.val
        tmpRes = tmpRes.next
        if(even.next == null)
            break
        even = even.next.next
    }

    return res
};

var head = H.arrayToNode([1,2,3,4,5])

var res = oddEvenList(head)

console.log(H.nodeToArray(res))
