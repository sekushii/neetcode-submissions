class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        const freq = new Array(26).fill(0);
        for(let i = 0; i < s.length; i++) {
            freq[s[i].charCodeAt() - "a".charCodeAt()] += 1;
            freq[t[i].charCodeAt() - "a".charCodeAt()] -= 1;
        }
        return freq.every(f => f===0);
    }
}
