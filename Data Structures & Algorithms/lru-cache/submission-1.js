class Node {
    constructor(val, key = null,  prev = null, next = null) {
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
        this.map = new Map();
        this.mru = new Node();
        this.lru = new Node();
        this.mru.next = this.lru;
        this.lru.prev = this.mru;
        this.capacity = capacity;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        // update mru
        const node = this.map.get(key)
        if(!node) return -1;

        this.removeFromList(node)
        this.updateMru(node);

        return node.val;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        const existingNode = this.map.get(key);
        if(existingNode) {
            existingNode.val = value;
            this.removeFromList(existingNode)
            return this.updateMru(existingNode);
        }
        if (this.map.size >= this.capacity){
            // evict lru
            const lru = this.lru.prev;
            lru.prev.next = this.lru;
            this.lru.prev = lru.prev;
            this.map.delete(lru.key);
        }
        const node = new Node(value, key);
        this.map.set(key, node);
        this.updateMru(node);
    }

    removeFromList(node) {
        node.next.prev = node.prev;
        node.prev.next = node.next;
    }

    updateMru(node) {
        const mru = this.mru;
        mru.next.prev = node;
        node.next = mru.next;
        node.prev = mru;
        mru.next = node;
    }
}
