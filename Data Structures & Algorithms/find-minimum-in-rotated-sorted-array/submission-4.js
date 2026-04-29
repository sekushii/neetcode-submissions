class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l=0, r=nums.length-1
        let min = nums[l];

        while(l<=r){
            if(nums[l] < nums[r]) return Math.min(nums[l], min)
            const k = Math.floor((l+r)/2)
            const curr = nums[k];
            console.log(k,curr,min)
            if(curr < nums[0]) {
                min=Math.min(min, curr)
                r = k-1
                console.log(r,min)
            } else {
                l = k+1
            }
        }
        return min;
    }
}
