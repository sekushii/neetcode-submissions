class MedianFinder {
    constructor() {
        this.nums = [];
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        this.nums.push(num);
        this.nums.sort((a,b)=> a-b);
    }

    /**
     * @return {number}
     */
    findMedian() {
        const mid = this.nums.length/2;
        if(this.nums.length%2===0) return (this.nums[mid] + this.nums[mid-1])/2
        return this.nums[Math.floor(mid)]
    }
}
