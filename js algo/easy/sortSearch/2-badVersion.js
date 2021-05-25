/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
 var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        var start=0, end=n
        var mid = Math.floor(n/2)
        while(!(isBadVersion(mid) == false && isBadVersion(mid+1) == true)) {
            if(isBadVersion(mid) == false)
                start = mid+1
            else
                end = mid-1

            mid = Math.floor((start + end)/2)
        }

        return mid+1
    };
};

var isBadVersion = n => n > 10

var x = solution(isBadVersion)(15)


