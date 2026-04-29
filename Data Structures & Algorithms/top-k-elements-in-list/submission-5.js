class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const bucket = [], map = {}, res = [];

        for (let n of nums) {
            map[n] = (map[n] ?? 0) + 1;
            let freq = map[n];
            if(!bucket[freq]) bucket[freq] = new Set();
            bucket[freq].add(n);
            if(freq>1) bucket[freq-1].delete(n);
        }

        while(k>0) {
            const curr = bucket.pop();
            res.push(...curr);
            k-=curr.size;
        }

        return res;
        
    }
}
