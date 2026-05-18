class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const heap = new MaxPriorityQueue();

        for(let w of stones) heap.enqueue(w);

        while(heap.size() > 1) {
            heap.enqueue(heap.dequeue() - heap.dequeue());
        }

        return heap.front();
    }
}
