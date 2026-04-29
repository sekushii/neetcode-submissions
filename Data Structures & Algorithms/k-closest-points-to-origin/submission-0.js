class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const heap = new MinPriorityQueue(item => item.value);
        const res = []

        for (let [x, y] of points) {
            const dist = x * x + y * y;
            heap.enqueue({ coord: [x,y], value: dist});
        }

        while(k > 0 && heap.size() > 0) {
            res.push(heap.dequeue().coord);
            k--;
        }

        return res;
    }
}
