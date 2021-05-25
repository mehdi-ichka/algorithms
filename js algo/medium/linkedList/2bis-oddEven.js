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

    if(!head || !head.next || !head.next.next)
        return head

    var tail = head
    var length = 1
    while(tail.next !== null) {
        length++
        tail = tail.next
    }

    var curr = head
    for (let i = 0; i < Math.floor(length/2); i++) {
        tail.next = curr.next
        curr.next = curr.next.next
        curr = curr.next
        tail = tail.next
    }

    tail.next = null

    return head
};

// OTHER SOLUTION
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
//  var oddEvenList = function(head) {
//     if (head == null) {
//         return head;
//     }
    
//     var odd = head;
//     var even = head.next;
//     var evenHead = even;
//     while(even != null && even.next != null) {
//         odd.next = even.next;
//         odd = odd.next;
//         even.next = odd.next;
//         even = even.next;
//     }
//     odd.next = evenHead;
//     return head;
// };

var head = H.arrayToNode([1,2,3,4,5])

var res = oddEvenList(head)

console.log(H.nodeToArray(res))
