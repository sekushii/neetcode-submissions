class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let i=0,j=heights.length-1,max=0;
        while(i<j){
            let amount = (j-i)*Math.min(heights[j],heights[i])
            if(amount>max)max=amount;
            if(heights[j] > heights[i]) i++
            else j--
        }
        return max;
    }
}
