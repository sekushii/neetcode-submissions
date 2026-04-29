class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let max = 0;

        for (let n of nums) {
            const isHead = !set.has(n-1);
            if(!isHead) continue;
            let count = 1, num = n;
            while(set.has(num)) {
                max = Math.max(count, max)
                num++;
                count++;
            }
        }

        return max;
    }
}
