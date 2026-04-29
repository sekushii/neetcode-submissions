class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let hmap = {}
        let bucket = Array(nums.length+1).fill([]);
        nums.forEach(n => hmap[n] = hmap[n] ? hmap[n] += 1 : 1)
        Object.entries(hmap).forEach((a) => { 
            bucket[a[1]] = [...bucket[a[1]], a[0]]
        })
        let res = []
        for (let i = bucket.length-1, c = 0 ; i>0 ; i-- ){
            res.push(...bucket[i])
            c += bucket[i].length
            if(c === k) break
        }
        return res;
    }
}
