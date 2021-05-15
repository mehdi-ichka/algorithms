const helper = require("./helpers/arraysAndNodes")

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
    if(head == null || head.next ==null) return head;
    let headNext = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return headNext;
};

headArray = [1,2,3,4]
var head = helper.arrayToNode(headArray)

var res = reverseList(head)

console.log(helper.nodeToArray(res))