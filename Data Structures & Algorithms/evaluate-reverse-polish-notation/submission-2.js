class Solution {
    calc(n1,n2,op) {
        if(op==="+") return n1+n2
        if(op==="-") return n1-n2
        if(op==="*") return n1*n2
        if(op==="/") return Math.trunc(n1 / n2)
    }
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const nums = []

        for (let t of tokens) {
            if (!isNaN(t)) nums.push(Number(t))
            else {
                let n1 = nums.pop(), n2 = nums.pop()
                nums.push(this.calc(n2,n1,t));
            }
        }
        return nums.pop();
    }
}
