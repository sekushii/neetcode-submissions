class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        const len = height.length;
        if(len<3) return 0;
        let curr = 0, vol = 0
        const maxL = new Array(len).fill(0)
        for(let i=0;i<len;i++){
            curr = Math.max(curr,height[i-1] ?? 0);
            maxL[i]=curr
        }
        curr = 0;
        const maxR = new Array(len).fill(0)
        for(let i=len-1;i>=0;i--){
            curr = Math.max(curr,height[i+1] ?? 0);
            maxR[i]=curr
        }
        console.log(maxR,maxL)
        for(let i=0;i<len;i++){
            console.log(maxL[i], maxR[i], height[i])
            vol+= Math.max(Math.min(maxL[i], maxR[i]) - height[i], 0);

        }
        return vol
    }
}
