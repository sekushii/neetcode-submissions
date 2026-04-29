class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const map = {
            ")": "(",
            "]": "[",
            "}": "{",
        }
        const stack = [];

        for(let c of s) {
            if(!(c in map)) {
                stack.push(c);
                continue;
            }
            if(stack.pop() !== map[c]) return false;
        }
        return stack.length === 0;
    }
}
