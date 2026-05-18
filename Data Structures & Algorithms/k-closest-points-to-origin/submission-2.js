class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const heap = new MinPriorityQueue(a => a.dis);
        
        for (const [p1,p2] of points) {
            heap.enqueue({
                point: [p1,p2],
                dis: p1**2 + p2**2
            })
        }

        const res = [];

        while(k > 0) {
            res.push(heap.dequeue().point);
            k--;
        }

        return res;
    }
}
