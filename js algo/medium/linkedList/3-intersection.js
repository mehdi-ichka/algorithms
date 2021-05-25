const H = require("./helpers/arraysAndNodes")
// time O(n2), space O(1)
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function(headA, headB) {
    var currA = headA
    while(currA != null) {
        var currB = headB
        while(currB != null) {
            if(currB == currA)
                return currA
            currB = currB.next
        }
        currB = headB
        currA = currA.next
    }
};

var headA = H.arrayToNode([1,9,1,2,4])
var headB = H.arrayToNode([3])

headB.next = headA.next.next.next

var res = getIntersectionNode(headA, headB)

console.log(H.nodeToArray(res))
