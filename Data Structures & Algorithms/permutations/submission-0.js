class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        if(nums.length === 0) return [[]];
        let perms = this.permute(nums.slice(1));
        const res = [];
        for (let perm of perms) {
            for (let i = 0; i < perm.length + 1; i++) {
                let copy = [...perm];
                copy.splice(i, 0, nums[0]);
                res.push(copy);
            }
        }
        return res;
    }
}
