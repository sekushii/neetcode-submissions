class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let min = 1, max = Math.max(...piles), optimal = max;

        while (min<=max) {
            const mid = Math.floor((min+max)/2);
            const timeTaken = piles.reduce(((total, pile) => 
            total + Math.ceil(pile/mid)), 0)
            if(timeTaken > h) min = mid+1;
            else if (timeTaken <= h) {
                optimal = mid;
                max = mid - 1;
            }
        }
        return optimal;
    }
}
