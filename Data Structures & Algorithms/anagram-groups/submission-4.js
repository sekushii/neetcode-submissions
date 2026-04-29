class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        if (strs.length === 0) return [[""]]
        let hmap ={}
        strs.forEach(s => {
            let letterfreq = Array(26).fill(0);
            Array.from(s).forEach(c => letterfreq[c.charCodeAt(c) - "a".charCodeAt()] += 1)
            let key = letterfreq.join(",")
            hmap[key] = hmap[key] ? [...hmap[key], s] : [s]
        })
        return Object.values(hmap);
    }
}
