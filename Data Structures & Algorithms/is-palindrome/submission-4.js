class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isAlpha(c) {
        const code = c.toLowerCase().charCodeAt();
        const isLetter = code >= "a".charCodeAt() && code<="z".charCodeAt();
        const isNumber = code >= "0".charCodeAt() && code<="9".charCodeAt();
        return isLetter || isNumber;
    }
    isPalindrome(s) {
        let l = 0, r = s.length-1;
        while(l<r) {
            const lchar = s[l]
            const rchar = s[r];
            if(!this.isAlpha(lchar)) {
                l++; continue;
            }
            if(!this.isAlpha(rchar)){
                r--; continue;
            }
            if(lchar.toLowerCase() !== rchar.toLowerCase()) return false;
            l++;
            r--;
        }
        return true;
    }
}
