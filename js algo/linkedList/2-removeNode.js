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



    var res = nodeToArray(head)

    return res
};

var head
var node

for (const num of [1,2]) {

    if(head == null) {
        head = new ListNode(num)
        node = head
        continue
    }

    node.next = new ListNode(num)
    node = node.next
}


// ---------------TEST-----------------
var res = removeNthFromEnd(head, 2)

console.log(res)



function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

function nodeToArray(node) {
    var arr = []
    while(node.next != null) {
        arr.push(node.val)
        node = node.next
    }

    arr.push(node.val)

    return arr
}

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