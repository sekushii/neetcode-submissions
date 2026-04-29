class Solution {
    /**
     * @param {number[]} ts
     * @return {number[]}
     */
    dailyTemperatures(ts) {
        let stack = [], res = Array(ts.length).fill(0);

        for(let i =0; i<ts.length; i++) {
            let curr = ts[i];

            while(
                stack.length > 0 &&
                ts[stack[stack.length - 1]] < curr
            ) {
                const popped = stack.pop();
                res[popped] = i - popped;
            }

            stack.push(i)
        }

        return res;
    }
}
