class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0, r = nums.length - 1;
        const start = nums[0];

        while (l<=r) {
            const midIdx = Math.floor((l+r)/2);
            const midVal = nums[midIdx];

            if(target === midVal) return midIdx;

            if(nums[l] <= midVal) {
                if(target >= nums[l] && target < midVal) r = midIdx-1;
                else l = midIdx+1;
            } else {
                if (target <= nums[r] && target > midVal) l = midIdx+1;
                else r = midIdx-1;
            }
        }

        return -1;
    }
}
