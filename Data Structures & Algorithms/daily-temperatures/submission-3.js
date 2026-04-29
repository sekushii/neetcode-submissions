class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const stack = [];
        const res = new Array(temperatures.length).fill(0);
        const getTop = arr => temperatures[arr[arr.length - 1]] ?? null;

        for(let i = 0; i<temperatures.length; i++){
            const curr = temperatures[i];
            if(stack.length === 0 || curr < getTop(stack)) {
                stack.push(i);
                continue;
            }
            while(stack.length > 0 && curr > getTop(stack)) {
                const top = stack.pop();
                res[top] = i - top;
            }
            stack.push(i);
        }

        return res;
    }
}
