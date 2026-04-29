class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        const len = height.length;
        if(len<3) return 0;
        let vol = 0,i=0,j=len-1
        let maxR=height[j],maxL=height[i]
        while(i<j) {
            if (maxL > maxR) {
                j--
                maxR=Math.max(maxR,height[j])
                vol+= maxR - height[j]
            } else {
                i++
                maxL=Math.max(maxL,height[i])
                vol+= maxL - height[i]
            }
        }
        return vol;
    }
}