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
 * @return {boolean}
 */
 var isPalindrome = function(current) {
   this.head = current
   return isPalindrome_rec(current)
};

function isPalindrome_rec(current) {
   
   if(current == null)
      return true
   
   var res = isPalindrome_rec(current.next)
   
   if(res == false)
      return false

   if(current.val !== this.head.val) {
      return false
   }
   else {
      this.head = this.head.next
      return true
   }
}
// var l1 = new H.ListNode(1, new H.ListNode(2, new H.ListNode(5, new H.ListNode(8, null))))
var l2 = new H.ListNode(2, new H.ListNode(3, new H.ListNode(4, new H.ListNode(9, new H.ListNode(2, null)))))

// var node = nodes.next.next.next // 4

var res = isPalindrome(l2)

console.log(res)
