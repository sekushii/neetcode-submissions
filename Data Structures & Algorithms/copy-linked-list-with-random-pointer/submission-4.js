// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        const nodes = new Map();// new Array(101).fill(null);
        let curr = head;

        while (curr) {
            const {val} = curr;
            nodes.set(curr, new Node(val));
            curr = curr.next;
        }
        curr = head;
        while (curr) {
            const {next, random} = curr;
            const newNode = nodes.get(curr);
            newNode.next = next ? nodes.get(next) : null;
            newNode.random = random ? nodes.get(random) : null;
            curr = curr.next;
        }
        return nodes.get(head) ?? null;
    }
}
