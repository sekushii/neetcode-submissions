class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let max = 0;
        const area = (l,r,d) => Math.min(l,r) * d;
        let l = 0, r = heights.length - 1;
        while(l < r) {
            const hr = heights[r], hl = heights[l];
            max = Math.max(max, area(hr, hl, r-l));
            if(hr < hl) r--
            else l++
        }
        return max;
    }
}
