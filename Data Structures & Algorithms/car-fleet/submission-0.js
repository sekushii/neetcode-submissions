class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const stack = []
        const pairs = position.map((p,i)=> ([p, speed[i]])).sort(([p1,], [p2,]) => p2-p1)
        console.log("pairs",pairs)
        for(let [pos,vel] of pairs) {
            if(stack.length===0) {
                stack.push([pos,vel]);
                continue;
            }
            console.log("stack", stack)
            const top = stack[stack.length - 1];
            console.log("top", top)
            const intersects = (target-top[0])/top[1] >= (target-pos)/vel
            console.log(intersects, (target-top[0])/top[1],  (target-pos)/vel)
            if(!intersects) stack.push([pos,vel])
        }

        return stack.length;
    }
}
