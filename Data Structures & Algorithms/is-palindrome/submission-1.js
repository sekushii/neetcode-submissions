class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let cleared = s.replace(/[^a-z0-9]/gi, "").toLowerCase()
        return cleared === cleared.split("").reverse().join("")
    }   
}
