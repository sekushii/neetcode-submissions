class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l=1, r=Math.max(...piles), i; 
        let best=r;
        while (l<=r) {
            i = Math.floor((l+r)/2)
            let hsum = 0;
            for(let j = 0; j<piles.length;j++){
                hsum+=Math.ceil(piles[j]/i)
                if(hsum>h) break;
            }
            if(hsum > h) l = i+1
            else if (hsum <= h) {
                best = Math.min(best, i)
                r = i-1
            }
        }
        return best;
    }
}
