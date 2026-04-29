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
        const map = new Map()
        map.set(null, null);
        let curr = head;

        while(curr) {
            const newNode = new Node(curr.val);
            map.set(curr, newNode);
            curr = curr.next;
        }
        curr = head;
        while(curr) {
            let tmp = map.get(curr);
            tmp.next = map.get(curr.next);
            tmp.random = map.get(curr.random);
            curr = curr.next;
        }

        return map.get(head);
    }
}
