class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let rate = 1;
        while(true){
            let hsum = 0;
            for(let i = 0; i<piles.length; i++) {
                hsum += Math.ceil(piles[i]/rate)
            }
            if(hsum>h) rate++;
            else return rate;
        }
    }
}
