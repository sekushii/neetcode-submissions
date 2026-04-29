class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        const map = {};
        for(let n of tasks) {
            if(!map[n]) map[n] = 1;
            else map[n]++;
        }
        const q = new MaxPriorityQueue();
        for (let val of Object.values(map)) {
            q.enqueue(val);
        }
        
        const cdQueue = new Queue();
        let time = 0;
        while(q.size() > 0 || cdQueue.size() > 0) {
            time++;
            if(q.size() > 0) {
                const task = q.dequeue();
                if(task > 1) {
                    cdQueue.push([task-1, time + n]);
                }
            }
            while(cdQueue.size() > 0 && cdQueue.front()[1] === time) {
                q.enqueue(cdQueue.pop()[0]);
            }
        }
        return time;
    }
}
