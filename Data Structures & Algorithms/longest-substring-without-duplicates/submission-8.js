class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l=0,r=0,max=0;
        const set = new Set();

        while(r < s.length) {
            let lc = s[l], rc = s[r];
            if(!set.has(rc)) {
                set.add(rc);
                max = Math.max(max, r+1-l);
                r++;
                console.log(set,max,r)
            } else {
                while(set.has(rc)) {
                    set.delete(lc);
                    l++;
                    lc = s[l]
                }
            }
        }
        return max;
    }
}
