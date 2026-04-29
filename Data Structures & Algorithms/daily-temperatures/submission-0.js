class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let res = []

        for (let i = 0; i<temperatures.length; i++) {
            let found = false
            for(let j = i+1; j<temperatures.length; j++) {
                if(temperatures[j] > temperatures[i]) {
                    res.push(j-i);
                    found = true
                    break;
                }
            }
            if(!found) res.push(0)
        }

        return res;
    }
}
