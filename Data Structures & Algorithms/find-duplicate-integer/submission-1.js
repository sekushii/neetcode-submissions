class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        for (let n of nums) {
            const i = Math.abs(n) - 1;
            if(nums[i] < 0) return Math.abs(n);
            nums[i] = -nums[i];
        }
    }
}
