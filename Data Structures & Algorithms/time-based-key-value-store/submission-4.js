class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        this.keyStore.set(key, [...(this.keyStore.get(key) ?? []), [value, timestamp]]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        const arr = this.keyStore.get(key);
        if(!arr) return "";
        let best = "";
        let l = 0, r = arr.length - 1;
        while (l<=r) {
            const mid = Math.floor((l+r)/2);
            const [val, time] = arr[mid];
            if(time === timestamp) return val;
            if(time > timestamp) r = mid-1;
            else {
                best = arr[mid][0]
                l = mid + 1
            };
        }
        return best;
    }
}
