class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = {}
        for (let i = 0; i<strs.length; i++) {
            const s = strs[i];
            const keyArray = Array(26).fill(0)
            for (let j = 0; j<s.length; j++){
                const c = s[j];
                keyArray[c.charCodeAt() - "a".charCodeAt()] += 1;
            }
            const key = keyArray.join("-")
            console.log(keyArray)
            map[key] = Array.isArray(map[key]) ? [...map[key], s] : [s]
        }

        return Object.values(map);
    }
}
