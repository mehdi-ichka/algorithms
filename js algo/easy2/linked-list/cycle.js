const H = require("./helpers/arraysAndNodes")
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {

   var slow = head, fast = head

   if(head == null)
      return false

   while(slow.next != null && fast.next != null && fast.next.next != null) {

      slow = slow.next
      fast = fast.next.next

      if(slow == fast)
         return true

   }

   return false

 }

var head = new H.ListNode(2, new H.ListNode(3, new H.ListNode(4, new H.ListNode(9, new H.ListNode(2, null)))))
var tail = head
while(tail.next != null) {
   tail = tail.next
}

tail.next = head.next

var res = hasCycle(head)

console.log(res)
