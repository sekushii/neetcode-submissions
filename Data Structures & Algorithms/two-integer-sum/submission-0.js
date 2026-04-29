class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let i=0,j=0
        let hashmap = {}
        
        while (i<nums.length) {
            let diff = target - nums[i]
            if(hashmap[diff] != undefined) return [hashmap[diff], i]
            hashmap[nums[i]] = i
            i++;
        }
    }
}