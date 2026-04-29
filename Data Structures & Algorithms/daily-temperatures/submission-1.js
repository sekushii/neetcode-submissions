class Solution {
    /**
     * @param {number[]} ts
     * @return {number[]}
     */
    dailyTemperatures(ts) {
        let stack = [], res = Array(ts.length).fill(0);

        for(let i =0; i<ts.length; i++) {
            let curr = ts[i];
            let top = ts[stack[stack.length - 1]];

            if(!isNaN(top) && curr < top) {
                stack.push(i);
                continue;
            }

            while(true) {
                const newTop = ts[stack[stack.length - 1]];
                if(stack.length === 0 || newTop >= curr) break;
                const popped = stack.pop();
                res[popped] = i - popped;
            }

            stack.push(i)
        }

        return res;
    }
}
