/**
 * @param {number[]} nums
 */
 var Solution = function(nums) {
    this.originalNums = nums.slice()
    this.nums = nums
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    this.nums = this.originalNums
    return this.nums
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {

    var i = Math.floor(Math.random() * this.nums.length)
    var j = i
    while(j == i)
        j = Math.floor(Math.random() * this.nums.length)

    var tmp = this.nums[i]
    this.nums[i] = this.nums[j]
    this.nums[j] = tmp
    
    
    return this.nums
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */