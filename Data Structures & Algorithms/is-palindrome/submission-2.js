class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        for(let i=0, j=s.length-1;j>i;) {
            let chari = s[i];
            let charj = s[j];
            if(!chari.match(/[a-z0-9]/i)) {
                i++;
                continue;
            }
            if(!charj.match(/[a-z0-9]/i)) {
                j--;
                continue;
            }
            if(chari.toLowerCase() !== charj.toLowerCase()) return false;
            i++;
            j--;
        }
        return true;
    }
}
