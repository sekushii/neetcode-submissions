class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = {};
        const base = "a".charCodeAt();

        for (let str of strs) {
            const freq = new Array(26).fill(0);
            for(let char of str) {
                freq[char.charCodeAt() - base] += 1;
            }
            const code = freq.join(",");
            if(!map[code]) map[code] = [];
            map[code].push(str);
        }
        return Object.values(map);
    }
}
