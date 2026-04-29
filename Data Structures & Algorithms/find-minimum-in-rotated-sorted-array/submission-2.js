class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l=0, r=nums.length-1;
        const start=nums[l], end=nums[r];
        if(nums[l]<=nums[r]) return nums[l];

        while(l<=r) {
            const i = Math.floor((l+r)/2);
            const curr = nums[i], prev = nums[i-1], next = nums[i+1];
            console.log(i,curr,prev,next)
            if(curr < (prev ?? 1001) && curr < (next ?? 1001)) return curr;
            else if (curr > end) l = i+1;
            else r = i-1
        }
    }
}
