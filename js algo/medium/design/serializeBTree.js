var serialize = function(root, array=[], i=0) {

    var queue = [root.val]
    var i = 0
    while(queue.length != 0 && queue.some(v => v != null)) {
        queue.pop() // ++i elements
    }

};

var deserialize = function(data, root, i=0) {

};

var root = [1,2,3,null,null,4,5]


