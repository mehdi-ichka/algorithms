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

    var dump = new H.ListNode(0, null)
   var head = dump

   while(l1 != null && l2 != null) {
      if(l1.val < l2.val) {
         dump.next = l1
         l1 = l1.next
      } else {
         dump.next = l2
         l2 = l2.next
      }

      dump = dump.next
   }

   while(l1 != null) {
      dump.next = l1
      l1 = l1.next
      dump = dump.next
   }

   while(l2 != null) {
      dump.next = l2
      l2 = l2.next
      dump = dump.next
   }

   return head.next
 }

var l1 = new H.ListNode(1, new H.ListNode(2, new H.ListNode(5, new H.ListNode(8, null))))
var l2 = new H.ListNode(2, new H.ListNode(3, new H.ListNode(4, new H.ListNode(6, new H.ListNode(10, null)))))

// var node = nodes.next.next.next // 4

var res = mergeTwoLists(l1, l2)

console.log(H.nodeToArray(res))
