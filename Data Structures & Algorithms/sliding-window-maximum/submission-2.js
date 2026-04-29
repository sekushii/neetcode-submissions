class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let r=0,l=0,max=[];
        let dq = new Deque();

        while (r<nums.length) {
            let curr = nums[r];
            while(dq.back() !== null && curr > nums[Number(dq.back())]){
                dq.popBack()
            }
            dq.pushBack(r);
            if(dq.front() < l) dq.popFront();
            
            if(r+1>=k) {
                max.push(nums[dq.front()]);
            }
            r++;
            if(r>=k) l++;
            // console.log(r, l, dq.front())

        }

        return max
    }
}
