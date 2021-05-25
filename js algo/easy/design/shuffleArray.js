/**
 * @param {number[]} nums
 */
 var Solution = function(nums) {
    this.nums = nums
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.nums
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    var nums = this.nums.slice()
    
    for (let i = 0; i < nums.length; i++) {
        var j = Math.floor(Math.random() * nums.length)
        var tmp = nums[i]
        nums[i] = nums[j]
        nums[j] = tmp
    }
    
    return nums
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */