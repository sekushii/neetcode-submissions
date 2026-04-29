class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0, r = nums.length-1;
        while(l <= r) {
            const i = Math.floor((r+l)/2);
            const curr = nums[i];
            if(curr > target) r = i-1;
            else if(curr < target) l = i+1;
            else return i
        }
        return -1
    }
}
