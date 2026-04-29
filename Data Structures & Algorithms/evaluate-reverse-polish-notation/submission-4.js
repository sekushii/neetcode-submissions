class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const nums = [];

        for(let t of tokens) {
            if(!isNaN(Number(t))) {
                nums.push(Number(t));
                continue;
            }
            const n1 = nums.pop();
            const n2 = nums.pop();
            const op = t;
            let result;

            if (op === "+") result = n1+n2;
            if (op === "-") result = n2-n1;
            if (op === "*") result = n1*n2;
            if (op === "/") result = Math.trunc(n2/n1);
            nums.push(result);
        }

        return nums[0];
    }
}
