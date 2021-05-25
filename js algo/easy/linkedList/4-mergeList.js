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

    if(l1 == null) {
        var res = l2
        return res
    }

    if(l2 == null) {
        var res = l1
        return res
    }

    if(l1.val >= l2.val) {
        var res = new H.ListNode(l2.val, mergeTwoLists(l1, l2.next))  
        return res
    }
    else {
        var res = new H.ListNode(l1.val, mergeTwoLists(l1.next, l2))
        return res
    }

};

var l1 = [1,2,4,5]
var l2 = [1,3,4]

l1 = H.arrayToNode(l1)
l2 = H.arrayToNode(l2)

var res = mergeTwoLists(l1, l2)

console.log(H.nodeToArray(res))