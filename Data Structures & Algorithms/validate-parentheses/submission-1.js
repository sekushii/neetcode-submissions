class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];

        for(let i = 0;i<s.length;i++) {
            let char = s[i];
            if(["(","{","["].includes(char)) stack.push(char)
            if(char===")") if(stack.pop() !== "(") return false;
            if(char==="}") if(stack.pop() !== "{") return false;
            if(char==="]") if(stack.pop() !== "[") return false;
        }

        return stack.length === 0
    }
}
