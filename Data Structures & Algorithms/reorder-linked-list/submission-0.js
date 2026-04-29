/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        let node = head;
        let nodes = [];
        while(node) {
            nodes.push(node);
            node = node.next;
        }
        let l = 0, r = nodes.length-1;
        while (l<r) {
            nodes[l].next = nodes[r];
            l++;
            nodes[r].next = nodes[l];
            r--;
        }
        nodes[l].next = null;

        return head;
    }
}
