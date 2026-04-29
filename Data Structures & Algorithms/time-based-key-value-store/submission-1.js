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
        const curr = this.keyStore.get(key);
        console.log("adding", {value, timestamp}, "to", curr);
        this.keyStore.set(key, [...(curr || []), {value, timestamp}]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        const values = this.keyStore.get(key);
        if (!values) return "";
        let l = 0, r = values.length-1, best = {value: ""};
        console.log("getting", key, timestamp);
        while(l<=r) {
            const m = Math.floor((l+r)/2);
            const curr = values[m];
            console.log("curr", m, curr)
            if(curr.timestamp === timestamp) return curr.value;
            if (curr.timestamp <= timestamp) {
                best = curr
                l = m+1
            }
            else r = m-1;
        }
        console.log("returning", best)
        return best.value;
    }
}
