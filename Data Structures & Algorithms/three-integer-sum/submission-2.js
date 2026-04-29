class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const triplets=[]
        nums.sort((a,b)=>a-b);
        let i = 0;
        console.log("sorted",nums)
        while(nums[i]<=0){
            let n = nums[i];
            if(n === nums[i-1]) {i++; continue;}
            console.log("n",n)
            let j=i+1, k=nums.length-1;
            while(j<k){
                let m = nums[j], p = nums[k], sum = n+m+p;
                console.log("m,p",m,p)
                if(sum < 0) j++;
                else if(sum > 0) k--;
                else {
                    triplets.push([n,m,p])
                    console.log("pushed", [n,m,p])
                    console.log("p === nums[k-1]",p,nums[k-1])
                    console.log("k-1>=j",k-1,j)
                    k--;j++;
                    while(p === nums[k] && k>j) {
                        console.log("decrement")
                        k--
                    }
                    while(m === nums[j] && j<k) {
                        console.log("decrement")
                        j++
                    }
                }
            }
            i++;
        }


        return triplets;
    }
}
