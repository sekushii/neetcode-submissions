class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        if(s == "" && t == "") return true;
        const hmap = {};
        for (let i = 0; i < s.length; i++) {
            if(isNaN(hmap[s[i]])) hmap[s[i]] = 1
            else hmap[s[i]]+=1;
            if(isNaN(hmap[t[i]])) hmap[t[i]] = -1;
            else hmap[t[i]]-=1;
        }
        return Object.values(hmap).every(v => v===0);
    }
}
