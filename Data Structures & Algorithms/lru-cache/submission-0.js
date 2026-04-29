class Node {
    constructor(key, val, next = null, prev = null) {
        this.key = key;
        this.val = val;
        this.prev = prev;
        this.next = next;
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
        this.head = new Node(0,0);
        this.tail = new Node(0,0);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    insert(node) {
        node.prev = this.head;
        node.next = this.head.next;
        this.head.next.prev = node;
        this.head.next = node;
    }

    remove(node) {
        node.next.prev = node.prev;
        node.prev.next = node.next;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        const node = this.cache.get(key);
        if(node) {
            this.remove(node);
            this.insert(node);
            console.log(node)
            return node.val;
        }
        return -1;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.cache.get(key)) this.remove(this.cache.get(key));

        this.cache.set(key, new Node(key, value));
        this.insert(this.cache.get(key));

        if(this.cache.size > this.capacity) {
            const lru = this.tail.prev;
            this.remove(lru);
            this.cache.delete(lru.key);
        }
    }
}
