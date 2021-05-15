// function translate(nums, i, value) {
//     var tmp
//     var next = value
//     while(i < nums.length) {
//         tmp = nums[i]
//         nums[i] = next
//         next = tmp
//         i++
//     } 
// }

function translate(nums, i, value) {
    var tmp
    var next = value
    for (let k = i; k < nums.length; k++) {
        tmp = nums[k]
        nums[k] = next
        next = tmp
    } 
}
var nums = [1,2,3,0]
translate(nums, 3, 'a')

console.log(nums)
