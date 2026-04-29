class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set = new Set(nums)
        let longest = 0;
        for (const member of set) {
            longest = Math.max(longest, 1)
            if (!set.has(member-1)) {
                let i = 1;
                while (set.has(member + i)) {
                    i++;
                    if(i>longest)longest=i;
                }
            }
        }

        return longest;
    }
}
