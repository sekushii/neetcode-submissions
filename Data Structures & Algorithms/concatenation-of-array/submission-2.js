class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        for(let i = 0, l = nums.length; i<l; i++) {
            nums.push(nums[i]);
        }
        return nums;
    }
}
