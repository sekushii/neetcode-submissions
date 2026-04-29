class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let l=0,r=0,longest=0, chars={}
        
        while(r<s.length){
            let curr = s[r]
            chars[curr] = chars[curr] ? chars[curr]+1 : 1
            while(r-l+1 - Math.max(...Object.values(chars)) > k) {
                chars[s[l]] -= 1
                l++
            }
            longest = Math.max(longest, r-l+1)
            r++
        }

        return longest
    }
}
