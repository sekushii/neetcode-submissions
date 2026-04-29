class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let longest = "";
        let firstString = strs[0];

        for (let i = 0; i<firstString.length; i++) {
            let char = firstString[i];
            if(strs.every(s => s[i] === char)) longest += char;
            else break;
        }
        return longest;
    }
}
