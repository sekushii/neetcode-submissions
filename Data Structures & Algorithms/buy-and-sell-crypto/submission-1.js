class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let i=0,j=1,max=0
        while(j<prices.length){
            let pi = prices[i], pj = prices[j]
            max = Math.max(max, pj-pi)
            if(pi>pj){
                i=j;j++
            } else {
                j++
            }
        }
        return max
    }
}
