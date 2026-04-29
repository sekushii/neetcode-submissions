class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefixes=Array(nums.length).fill(1)
        let suffixes=Array(nums.length).fill(1)
        let i=0
        while(i<nums.length){
            prefixes[i] = (prefixes[i-1] ?? 1) * nums[i]
            i++
        }
        i=nums.length-1
        while(i>=0){
            suffixes[i] = (suffixes[i+1] ?? 1) * nums[i]
            i--
        }
        return nums.map((_,i) => (prefixes[i-1] ?? 1) * (suffixes[i+1] ?? 1))
    }

}

