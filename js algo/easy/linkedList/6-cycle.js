const H = require("./helpers/arraysAndNodes")

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
    if(head != null && head.next == null)
        return false
    var i = 0
    var p = head.next
    while(p.next != null) {
        i++
        var q = head
        var j = 0
        while (q.next != p.next) {
            j++
            q = q.next
        }

        if(q.next == p.next && i !== j)
            return true

        p = p.next
        console.log()
    }

    return false
};


var head = [1,8,7,4]

head = H.arrayToNode(head)

head.next.next.next.next = head.next // 4 -> 8

var res = hasCycle(head)

console.log(res)