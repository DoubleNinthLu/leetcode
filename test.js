/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let l = 0; r = nums.length - 1;
    while (l < r) {
        let m = Math.floor(l + (r - l) / 2);
        if (nums[m] === nums[r]) {
            r--;
        } else {
            if (nums[m] < nums[r]) {
                r = m;
            } else {
                l = m + 1;
            }
        }
    }

    return nums[l];
};


console.log(findMin([2, 0, 1, 1, 1]));