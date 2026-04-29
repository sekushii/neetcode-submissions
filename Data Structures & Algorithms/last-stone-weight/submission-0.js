class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const heap = new MaxPriorityQueue();

        for(let n of stones) {
            heap.enqueue(n);
        }

        while(heap.size() > 1) {
            const s1 = heap.dequeue();
            const s2 = heap.dequeue();
            if(s1 === s2) continue;
            heap.enqueue(s1>s2 ? s1-s2 : s2-s1);
        }

        return heap.front() ?? 0;
    }
}
