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
        const dummy = new ListNode(0, head)
        let fast = head, slow = dummy;

        while(n>0) {
            fast = fast.next;
            n--;
        } // create gap of n

        while(fast){
            slow = slow.next;
            fast = fast.next;
        } // slow is at node before the one that needs to be deleted
        slow.next = slow.next.next;

        return dummy.next;
    }
}
