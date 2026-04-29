class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let zerocount = 0
        if (nums.every(n => n==0)) return nums;
        let tp = nums.reduce((p,n)=> {if(n!==0) return n*p; else {zerocount++; return p}}, 1)
        return nums.map(n =>{
            if(zerocount >1) return 0;
            if(zerocount==1 && n!==0) return 0;
            else if(zerocount==1 && n==0) return tp;
            return tp/n
        })
    }
}
