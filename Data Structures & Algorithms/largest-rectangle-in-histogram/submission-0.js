class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let max = 0;
        const stack = [];

        for(let i = 0; i<heights.length ; i++) {
            let top = stack[stack.length - 1];
            const h = heights[i];
            console.log("top,h", top, h)
            if(!top || top.h <= h) {
                stack.push({h, i})
                console.log("pushing", {h,i})
                continue;
            } else {
                let oldTop;
                while(stack.length > 0 && stack[stack.length - 1].h > h) {
                    oldTop = stack.pop();
                    console.log("oldTop", oldTop)
                    max = Math.max(max, oldTop.h * (i - oldTop.i))
                    console.log("max main", max)
                }
                stack.push({h, i: oldTop.i})
            }
        }
        console.log("stack", stack)

        while(stack.length > 0) {
            let top = stack.pop();
            max = Math.max(max, top.h * (heights.length - top.i))
            console.log("max remain", max)
        }

        return max;
    }
}
