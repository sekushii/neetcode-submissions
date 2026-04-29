class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let max=0,curr=0;
        for(let i = 0; i < nums.length; i++) {
            const num = nums[i];
            if(num === 1) {
                curr++;
                continue;
            }
            max=Math.max(curr, max);
            curr = 0;
        }
        max=Math.max(curr, max);
        return max;
    }
}
