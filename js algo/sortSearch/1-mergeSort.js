/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    if(n == 0)
        return nums1

     var i=0,j=0
    while(i<m && j<n) {
        if(nums1[i+j] > nums2[j]) {
            translate(nums1, i+j, nums2[j])
            j++
        } else {
            i++
        }
    }

    if(i >= m) {
        for (let k = i+j; k < m+n; k++) {
            nums1[k] = nums2[j]
            j++
        }
    }
};

function translate(nums, i, value) {
    var tmp
    var next = value
    for (let k = i; k < nums.length; k++) {
        tmp = nums[k]
        nums[k] = next
        next = tmp
    } 
}

translate([1,2,3,0], 1, 9)

var nums1 = [4,0,0,0,0,0], m = 1, nums2 = [1,2,3,5,6], n = 5

merge(nums1, m, nums2, n)

console.log(nums1)

//BETTER ANSWER (traverse backwards)
// var merge = function(nums1, m, nums2, n) {
//     let [p, p1, p2] = [m+n-1, m-1, n-1];
    
//     while(p > -1 && p2 > -1) {
//         if (p1 < nums1.length && nums1[p1] >= nums2[p2]) {
//             nums1[p] = nums1[p1];
//             p1--;
//         } else {
//             nums1[p] = nums2[p2];
//             p2--;
//         }
//         p--;
//     }
// };
//BETTER ANSWER
// var merge = function(nums1, m, nums2, n) {
//     let len = m + n - 1;
//     while (len >= 0) {
//         if (n < 1 ) return
//         if ( nums1[m-1] > nums2[n-1]) {
//             nums1[len--] = nums1[--m];
//         } else {
//             nums1[len--] = nums2[--n];
//         }
//     }
// };