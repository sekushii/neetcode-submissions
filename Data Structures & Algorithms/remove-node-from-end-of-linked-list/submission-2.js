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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let curr = head, prev = null;

        while (curr) {
            let temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        } // reversed, prev is last

        curr = prev;
        prev = null;
        while (n>1) {
            let temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
            n--;
        } // partially reversed, curr points to the node that must be removed

        curr = curr.next;
        // curr.next = prev;

        while (curr) {
            let temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }

        return prev;
    }
}
