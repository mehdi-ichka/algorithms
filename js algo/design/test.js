var shuffle = function(nums) {

    for (let i = 0; i < nums.length; i++) {
        var j = i
        while(j == i)
            j = Math.floor(Math.random() * nums.length)

        var tmp = nums[i]
        nums[i] = nums[j]
        nums[j] = tmp
    }

    return nums
};

shuffle([1,2])