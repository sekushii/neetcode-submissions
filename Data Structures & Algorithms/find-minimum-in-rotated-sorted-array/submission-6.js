class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l = 0, r = nums.length - 1;

        while(l<r) {
            const mid = Math.floor((l+r)/2);
            const right = nums[r];
            const middle = nums[mid];
            if(middle > right) {
                l = mid+1;
            } else {
                r = mid;
            }
        }
        return nums[l];
    }
}
