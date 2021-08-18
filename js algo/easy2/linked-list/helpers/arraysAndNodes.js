function nodeToArray(node) {
    var arr = []
    while(node.next != null) {
        arr.push(node.val)
        node = node.next
    }

    arr.push(node.val)

    return arr
}

function arrayToNode(array) {
    var head
    var node

    for (const element of array) {

        if(head == null) {
            head = new ListNode(element)
            node = head
            continue
        }
    
        node.next = new ListNode(element)
        node = node.next
    }

    return head;
}

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

module.exports = {arrayToNode, nodeToArray, ListNode}