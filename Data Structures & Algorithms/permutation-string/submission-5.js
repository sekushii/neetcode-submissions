class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const map = {};
        for(let s of s1) {
            map[s] = map[s] ? map[s]+1 : 1;
        }
        let l = 0, r = 0;
        while(r < s2.length) {
            const curr = s2[r];
            if(map[curr] === undefined) {
                while (l<r) {
                    if(map[s2[l]] !== undefined) map[s2[l]]++;
                    l++;
                }
                r++;
                l++;
            } else if (map[curr] === 0) {
                while (map[curr] === 0) {
                    if(map[s2[l]] !== undefined) map[s2[l]]++;
                    l++;
                }
            } 
            else {
                map[curr]--;
                r++;
                if(Object.values(map).every(v => v==0)) return true;
            }
        }

        return false;
    }
}
