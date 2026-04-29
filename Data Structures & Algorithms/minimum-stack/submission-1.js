const getTop = arr => arr[arr.length-1];
class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        if(getTop(this.minStack) === undefined || getTop(this.minStack) >= val) this.minStack.push(val);
    }

    /**
     * @return {void}
     */
    pop() {
        const popped = this.stack.pop();
        if(getTop(this.minStack) === popped) this.minStack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return getTop(this.stack);
    }

    /**
     * @return {number}
     */
    getMin() {
        return getTop(this.minStack);
    }
}
