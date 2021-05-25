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
 var addTwoNumbers = function(l1, l2) {
     var head = new H.ListNode(-1)
     var jumper = head
     var quotient = 0
    while(l1 !== null || l2 !== null) {

        jumper.next = new H.ListNode()
        jumper = jumper.next

        if(l1 == null)
            l1 = new H.ListNode(0)
 
        if(l2 == null)
            l2 = new H.ListNode(0)

        jumper.val = (l1.val+l2.val+quotient)%10

        quotient = parseInt((l1.val+l2.val+quotient)/10)

        l1 = l1.next
        l2 = l2.next
    }

    if(quotient > 0)
        jumper.next = new H.ListNode(quotient)
    
    head = head.next
    return head
};

var l1 = H.arrayToNode([9,9,9,9,9,9,9]), l2 = H.arrayToNode([9,9,9,9])

var res = addTwoNumbers(l1, l2)

console.log(H.nodeToArray(res))
