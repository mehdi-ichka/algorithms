const H = require("./helpers/arraysAndNodes")
// time O(n), space O(1)
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function(headA, headB) {

    if(!headA || !headB)
        return

    var tailA = headA
    var A = 1
    while(tailA.next != null) {
        A++
        tailA = tailA.next
    }

    var tailB = headB
    var B = 1
    while(tailB.next != null) {
        B++
        tailB = tailB.next
    }

    if(tailB != tailA)
        return

    var currA = headA
    var currB = headB
    if(A > B) {
        for (let i = 0; i < A-B; i++)
            currA = currA.next
    } else if(A < B) {
        for (let i = 0; i < B-A; i++)
            currB = currB.next
    }

    while(currA !== currB) {
        currA = currA.next
        currB = currB.next
    }

    return currA
};


// GENIUS SOLUTION, NOT MINE OF COURSE :'(
// var getIntersectionNode = function(headA, headB) {
//     if(headA === null || headB === null) return null;
//     let a = headA, b = headB;
    
//     while(a !== b) {
//         a = a === null ? headB : a.next;
//         b = b === null ? headA : b.next;
//     }
//     return a;
// };

var headA = H.arrayToNode([1,9,1,2,4])
var headB = H.arrayToNode([3])

headB.next = headA.next.next.next

var res = getIntersectionNode(headA, headB)

console.log(H.nodeToArray(res))
