class MedianFinder {
    constructor() {
        this.min = new MinPriorityQueue();
        this.max = new MaxPriorityQueue();
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        this.min.enqueue(num)

        if ((this.min.front() ?? -Infinity > this.max.front() ?? Infinity) ) {
            this.max.enqueue(this.min.dequeue())
        }
        if ((this.max.front() ?? Infinity < this.min.front() ?? -Infinity) ) {
            this.min.enqueue(this.max.dequeue())
        }

        while(Math.abs(this.min.size() - this.max.size()) > 1) {
            const minSize = this.min.size();
            const maxSize = this.max.size();
            if (minSize > maxSize) this.max.enqueue(this.min.dequeue())
            else this.min.enqueue(this.max.dequeue())
        }
    }

    /**
     * @return {number}
     */
    findMedian() {
        if(this.min.size() > this.max.size()) return this.min.front();
        else if (this.max.size() > this.min.size()) return this.max.front();
        return (this.min.front() + this.max.front())/2
    }
}
