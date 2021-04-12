/**
 * @param {number} n
 * @return {number}
 */
var largestNumber = function (nums) {
    nums.sort((a, b) => {
        let astr = a.toString() + b.toString();
        let bstr = b.toString() + a.toString();
        if (astr > bstr) {
            return -1;
        }
        if (astr < bstr) {
            return 1;
        }
        return 0;
    });
    return nums.join("").trim("0");
};

console.log(largestNumber([0, 0]))
