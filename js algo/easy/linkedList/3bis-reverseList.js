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
 var reverseList = function(head, prev=null) {
    if(head == null) 
        return prev;

    const tmp = head.next;
    head.next = prev;
    prev = head;

    return reverseList(tmp, prev)
};

headArray = [1,2,3,4]
var head = helper.arrayToNode(headArray)

var res = reverseList(head)

console.log(helper.nodeToArray(res))
