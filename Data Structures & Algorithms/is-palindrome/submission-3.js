class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isAlphaNum(c) {
        return (
            ("a".charCodeAt() <= c.charCodeAt()) && 
            (c.charCodeAt() <= "z".charCodeAt())) 
            ||
            ("0".charCodeAt() <= c.charCodeAt()) && 
            (c.charCodeAt() <= "9".charCodeAt())
    }

    isPalindrome(s) {
        for(let i=0, j=s.length-1;j>i;) {
            let c1 = s[i].toLowerCase();
            let c2 = s[j].toLowerCase();
            if(!this.isAlphaNum(c1)) {
                i++;
                continue;
            }
            if(!this.isAlphaNum(c2)) {
                j--;
                continue;
            }
            if(c1 !== c2) return false;
            i++;
            j--;
        }
        return true;
    }
}
