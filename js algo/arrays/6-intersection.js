// Best solution: use counter then count down in loop until counter is 0
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersect = function(nums1, nums2) {
     var list =  []
    for (let i = 0; i < nums1.length; i++) {
        
        for (let j = 0; j < nums2.length; j++) {
            
            if(nums1[i] == nums2[j]) {
                list.push(nums1[i])
                nums2.splice(j, 1)
                break
            }
            
        }
    }

    return list
};

var res = intersect([1,2,2,1], [1,2])
console.log(res)

