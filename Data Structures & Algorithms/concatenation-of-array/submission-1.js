class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let n = nums.length;
        let i = 0;
        while(i < n) {
            nums[i+n] = nums[i]
            i++;
        }
        return nums;
    }
}
