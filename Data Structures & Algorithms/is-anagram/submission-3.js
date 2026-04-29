class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false
        let tb = new Map();
        let n = 0;
        while (n < s.length) {
            tb.set(s[n], tb.get(s[n]) ? tb.get(s[n])+1 : 1)
            tb.set(t[n], tb.get(t[n]) ? tb.get(t[n])-1 : -1)
            n++
        }
        return tb.values().every(n => n === 0);
    }
}
