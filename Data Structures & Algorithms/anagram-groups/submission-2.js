class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */

    groupAnagrams(strs) {
        return Object.values(strs.reduce((res, s) => {
            let sorted = s.split("").sort().join("");
            res[sorted] = res[sorted] ? [...res[sorted], s] : [s]
            return res;
        }, {}))
    }
}
