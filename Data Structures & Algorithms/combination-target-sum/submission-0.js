class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const res = [];

        const dfs = (i, sum, curr) => {
            if(sum === target) return res.push([...curr]);
            if(i >= nums.length || sum>target) return;
            curr.push(nums[i])
            dfs(i, sum + nums[i], curr);
            curr.pop();
            dfs(i+1, sum, curr);

        }
        dfs(0, 0, []);
        return res;
    }
}
