class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        k = nums.length - k;

        const qs = (l, r) => {
            const pivot = nums[r];
            let p = l;
            
            for (let i = l; i<r; i++) {
                if(nums[i]<=pivot) {
                    [nums[i], nums[p]] = [nums[p], nums[i]];
                    p++;
                }
            }
            [nums[r], nums[p]] = [nums[p], nums[r]];

            if (p > k) {
                return qs(l, p - 1);
            } else if (p < k) {
                return qs(p + 1, r);
            } else {
                return nums[p];
            }
        }

        return qs(0, nums.length - 1);
    }
}
