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
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    var dummy = new H.ListNode(0, head)
    var fast = dummy
    var slow = dummy
    
    var counter = 0
    while(fast.next != null) {

        if(counter >= n)    
            slow = slow.next

        fast = fast.next
        counter++
    }

    slow.next = slow.next.next
     
     return dummy.next
    
};

var nodes = new H.ListNode(1, new H.ListNode(2, null))

// var node = nodes.next.next.next // 4

var res = removeNthFromEnd(nodes, 1)

console.log(H.nodeToArray(res))


