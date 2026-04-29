class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const triplets=[]
        nums.sort((a,b)=>a-b);
        let i = 0;
        while(nums[i]<=0){
            let n = nums[i];
            if(n === nums[i-1]) {i++; continue;}
            let j=i+1, k=nums.length-1;
            while(j<k){
                let m = nums[j], p = nums[k], sum = n+m+p;
                if(sum < 0) j++;
                else if(sum > 0) k--;
                else {
                    triplets.push([n,m,p])
                    k--;j++;
                    while(p === nums[k] && k>j) {
                        k--
                    }
                    while(m === nums[j] && j<k) {
                        j++
                    }
                }
            }
            i++;
        }


        return triplets;
    }
}
