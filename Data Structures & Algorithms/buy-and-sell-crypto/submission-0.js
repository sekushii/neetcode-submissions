class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        if(prices.length==1)return 0;
        let i=0,j=1,max=0
        while (i<prices.length-1){
            while(j<prices.length){
                max=Math.max(prices[j]-prices[i], max)
                j++
            }
            i++
            j=i+1
        }
        return max
    }
}
