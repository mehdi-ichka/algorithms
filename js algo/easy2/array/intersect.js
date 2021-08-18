/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersect = function(nums1, nums2) {

    nums1.sort((a,b) => a-b)
    nums2.sort((a,b) => a-b)
    var res = []
    var j = 0
    var i = 0
    while (i < nums1.length) {
        
        while(nums1[i] > nums2[j] && j < nums2.length)
            j++

        if(nums1[i] == nums2[j]) {

            res.push(nums1[i])
            j++
            i++
        } else { i++ }

    }

    return res

};

var nums1 = [4,7,9,7,6,7], nums2 = [5,0,0,6,1,6,2,2,4]

var res = intersect(nums1, nums2)
console.log(res)