class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if(s.length==0)return 0;
        if(s.length==1)return 1;
        let longest=0,chars=new Set(s[0])
        for(let i =0;i<s.length;i++){
            for (let j =i;j<s.length;j++){
                if(!chars.has(s[j])) {
                    chars.add(s[j])
                } else {
                    console.log(chars)
                    longest = Math.max(chars.size, longest)
                    chars.clear()
                    chars.add(s[j])
                }
            }
            longest = Math.max(chars.size, longest)
            chars.clear()
        }
        return longest
    }
}
