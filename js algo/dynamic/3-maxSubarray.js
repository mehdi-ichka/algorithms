// MY SOLUTION! THA BEST SHIT I VE EVER MADE!! :D
//  var maxSubArray = function(nums) {
//     if(nums.length == 1)
//         return nums[0]

//     var subArrays = [new subArray(0)]
//     var j = 0

//     for (let i = 0; i < nums.length; i++) {
//         if(subArrays[j].sum<0 && nums[i]<0)
//             subArrays[j].sum = Math.max(nums[i], subArrays[j].sum)

//         else if(subArrays[j].sum<0 && nums[i]>=0) {
//             subArrays[j] = new subArray(i)
//             subArrays[j].sum = nums[i]
//         }
//         else if(subArrays[j].sum>=0 && nums[i]>=0)
//             subArrays[j].sum += nums[i]
        
//         else if(nums[i]<0) {
//             subArrays[j].end = i-1
//             subArrays.push(new subArray(i-1, Math.max(subArrays[j].sum + nums[i], nums[i])))
//             j++
//         }
//     }

//     return Math.max(...subArrays.map(sa => sa.sum))
// };

// function subArray(startId, sumVal) {
//     start=startId
//     end=0
//     sum=sumVal || Number.MIN_SAFE_INTEGER

//     return {
//         start,
//         end,
//         sum
//     }
// }
// EASIEST WAY
//  var maxSubArray = function(nums) {
//     let best = nums[0]
//     let sum = 0

//     for (const num of nums) {
//         sum = Math.max(num, sum+num)
//         best = Math.max(best, sum)
//     }

//     return best
// };

var maxSubArray = function(nums) {
    if(nums.length == 1)
        return nums[0]
    let best = nums[0]
    let sum = 0

    for (const num of nums) {
        sum += num
        sum = Math.max(0, sum)
        best = Math.max(best, sum)
    }

    return best
};



nums = [-2,1,-3,4,-1,2,1,-5,4]

var res = maxSubArray(nums)
console.log(res)

