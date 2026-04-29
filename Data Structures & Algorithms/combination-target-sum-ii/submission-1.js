class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        const res = [];
        candidates.sort((a,b) => a-b);

        const backtrack = (sum, i, curr) => {
            if(sum === target) return res.push([...curr]);
            if(i >= candidates.length || sum > target) return;
            const n = candidates[i];
            curr.push(n);
            backtrack(sum + n, i+1, curr);

            curr.pop();
            while(i + 1 < candidates.length && candidates[i] === candidates[i+1]) i++;
            backtrack(sum, i+1, curr);
        }

        backtrack(0, 0, []);

        return res;
    }
}
