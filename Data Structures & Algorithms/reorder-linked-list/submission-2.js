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
        let slow = head, fast = head;

        while(fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        // slow is at middle point
        let prev = null, curr = slow.next;
        slow.next = null;
        while(curr) {
            let tmp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = tmp;
        }

        // latter half is reversed, prev got the last node
        slow = head;
        while(slow && prev) {
            let tempfwd = slow.next, tempbwd = prev.next;
            slow.next = prev;
            slow = tempfwd;
            prev.next = slow;
            prev = tempbwd;
        }

        return head;
    }
}
