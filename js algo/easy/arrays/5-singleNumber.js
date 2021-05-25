/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    var x = {}
    for (let i = 0; i < nums.length; i++) {
        
        if (x[nums[i]])
            x[nums[i]] = false
        else
            x[nums[i]] = true
    }

    var entry = Object.entries(x).find(entry => entry[1])
    return entry[0]
    // console.log(res)
};

// Best solution
var singleNumberBitwise = function(nums) {
    let res = nums[0];
    for(let i = 1; i <nums.length;i++){
        res = res ^ nums[i];
    }
    return res;
};

console.log(singleNumber([4,4,1,2,,5,1,2,3,5]))