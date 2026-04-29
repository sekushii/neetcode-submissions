class MedianFinder {
    constructor() {
        this.nums = new MinPriorityQueue();
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        this.nums.push(num);
    }

    /**
     * @return {number}
     */
    findMedian() {
        const arr = this.nums.toArray();
        const mid = arr.length/2;
        if(arr.length%2 === 0) return (arr[mid] + arr[mid-1])/2;
        return arr[Math.floor(mid)];

    }
}
