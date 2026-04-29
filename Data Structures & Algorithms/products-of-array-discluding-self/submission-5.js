class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const res = [];
        const prefix = [], postfix = new Array(nums.length);
        for(let i = 0, j = nums.length - 1, preProd = 1, postProd = 1; i<nums.length; i++, j--) {
            preProd = nums[i] * preProd;
            prefix.push(preProd);
            postProd = nums[j] * postProd;
            postfix[j] = postProd;
        }
        for (let i = 0; i<prefix.length; i++) {
            res.push((prefix[i-1] ?? 1) * (postfix[i+1] ?? 1));
        }
        return res;
    }
}
