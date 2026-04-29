class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next ?? null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        let n = 0;
        let node = this.head;
        if (index === 0 && this.head !== null) return this.head.value;
        while (node !== null && n !== index) {
            node = node.next
            n++;
        }

        return node ? node.value : -1;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        if(this.head === null) {
            this.head = new Node(val);
            return;
        }
        this.head = new Node(val, this.head);
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        let node = this.head;
        if (node === null){
            this.head = new Node(val);
            return;
        }
        // if(this.head === null) {
        //     this.head = new Node(val);
        //     return;
        // }
        while(node.next !== null){
            node = node.next;
        }
        node.next = new Node(val);
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        let n = 0;
        let node = this.head;
        if (!node) return false;
        if (index === 0 && this.head !== null) {
            this.head = this.head.next;
            return true;
        }
        let prev = null, next = null;
        while (node !== null && n !== index) {
            prev = node;
            next = node?.next?.next;
            node = node?.next;
            n++;
        }
        if (node === null && n <= index) return false;

        prev.next = next;
        return true;
    }

    /**
     * @return {number[]}
     */
    getValues() {
        let node = this.head;
        let values = [];
        while(node !== null){
            values.push(node.value);
            node = node.next;
        }
        return values;
    }
}
