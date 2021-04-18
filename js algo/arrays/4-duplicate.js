
function containsDuplicate(nums) {
    
    for (var i=0; i < nums.length - 1; i++) {
        for (var j=i+1; j < nums.length; j++) {

            if (nums[i] == nums[j])
                return true;
        }
    }

    return false
};

var res = containsDuplicate([1,2,3,4])

console.log(res)