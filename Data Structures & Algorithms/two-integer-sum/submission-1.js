class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = {}

        for (let i = 0; i < nums.length; i++) {
            const val = nums[i]
            const remainder = target - val;
            if (!isNaN(map[remainder])) return [map[remainder], i]
            map[val] = i;
        }
    }
}
