class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let chars = new Set(), l = 0, longest = 0

        for (let r=0; r<s.length;r++){
            let curr = s[r]
            if(!chars.has(curr)) {
                chars.add(curr)
            } else {
                longest = Math.max(longest, chars.size)
                while(chars.has(curr)) {
                    chars.delete(s[l])
                    l++
                }
                chars.add(curr)
            }
        }
        return Math.max(longest, chars.size);
    }
}
