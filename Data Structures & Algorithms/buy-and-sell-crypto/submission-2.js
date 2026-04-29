class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let max = 0, l = 0, r = 1;

        while(l<prices.length && r<prices.length) {
            const pl = prices[l], pr = prices[r];
            max = Math.max(max, pr-pl);
            if(pr >= pl) r++;
            else l = r;
        }

        return max;
    }
}
