const helper = require("./helpers/arraysAndNodes")

/**
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {

    var slowNode = head
    var fastNode = head

    var i = 0
    while(i < n) {
        i++
        fastNode = fastNode.next

        if(fastNode == null) {
            head = head.next
            return head
        }
    }

    while(fastNode.next != null) {
        slowNode = slowNode.next
        fastNode = fastNode.next
    }

    slowNode.next = slowNode.next.next

    return head
};

var head = helper.arrayToNode([1,2,3,4])

// ---------------TEST-----------------
var res = removeNthFromEnd(head, 2)

console.log(helper.nodeToArray(res))

// ------------BEST ANSWER------------------
// var removeNthFromEnd = function(head, n) {
//     const dummyNode = new ListNode();
//     dummyNode.next = head;
//     let leftNode = dummyNode;
//     let rightNode = dummyNode;
    
//     while(rightNode.next  !== null) {
//         rightNode = rightNode.next;
//         if(n-- <= 0) {
//             leftNode = leftNode.next;
//         }
//     }
    
//     leftNode.next = leftNode.next.next;
    
//     return dummyNode.next;
// };