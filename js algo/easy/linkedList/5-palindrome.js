const H = require("./helpers/arraysAndNodes")
// BEST SOLUTION
// Fast pointer and slow pointer, the fast will eventually catch the slow when cycles occur
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
 var isPalindrome = function(head, tail=head) {

    if(tail == null)
        return head;
    
    var ahead = isPalindrome(head, tail.next)

    if(tail.val != ahead.val)
        return false

    var tmp = ahead.next
    ahead.next = null
    ahead = tmp
    return ahead == null ? true : ahead

};



var head = [1,2,1]

head = H.arrayToNode(head)

var res = isPalindrome(head)

console.log(res)