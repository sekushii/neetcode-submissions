class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let l=0, r=0, max=0, freqs = new Array(26).fill(0);

        for(let c of s) freqs[c.charCodeAt() - "A".charCodeAt()]++;
        for (let i = 0; i < freqs.length; i++) {
            if(freqs[i] === 0) continue;
            const char = String.fromCharCode("A".charCodeAt() + i);
            let l=0, r=0, replacements = k;
            while(r<s.length) {
                if(s[r] === char) {
                    r++;
                } else if (s[r] !== char) {
                    if(replacements > 0) {
                        replacements--;
                        r++;
                    } else {
                        if(s[l] !== char) {
                            replacements++;
                        }
                        l++;
                        continue;
                    }
                }
                max = Math.max(max, r-l);
            }
        }
        return max;
    }
}
