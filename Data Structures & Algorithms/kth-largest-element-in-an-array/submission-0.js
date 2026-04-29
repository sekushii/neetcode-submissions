class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        const heap = new MaxPriorityQueue();
        for(let n of nums){
            heap.enqueue(n);
        }
        while (k > 1) {
            heap.dequeue();
            k--;
        }

        return heap.front();
    }
}
