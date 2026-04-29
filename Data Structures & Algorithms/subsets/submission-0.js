class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const res = [];
        const path = [];
        const dfs = i => {
            if(i === nums.length) return res.push([...path]);

            path.push(nums[i]);
            dfs(i+1);

            path.pop();
            dfs(i+1);
        }
        dfs(0);
        return res;
    }
}
