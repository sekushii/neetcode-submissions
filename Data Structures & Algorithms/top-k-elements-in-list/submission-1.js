class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let table = {}
        nums.forEach(n => table[n] = table[n] ? table[n] += 1 : 1)
        let freq = Object.entries(table).sort((a,b) => b[1] - a[1])
        let res = freq.map(e => e[0]).slice(0,k);
        return res;
    }
}
