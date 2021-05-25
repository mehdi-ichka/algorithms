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
    if(!head) return head;
    
    let res = null;
    let curr = head;
    
    while(curr) {
        const tmp = curr.next;
        curr.next = res;
        res = curr;
        curr = tmp;
    }

    return res;
    
};

headArray = [1,2,3,4]
var head = helper.arrayToNode(headArray)

var res = reverseList(head)

console.log(helper.nodeToArray(res))