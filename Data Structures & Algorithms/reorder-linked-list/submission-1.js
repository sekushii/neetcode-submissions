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
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        let second = slow.next;
        slow.next = null;
        let prev = null;
        while(second) {
            let temp = second.next;
            second.next = prev;
            prev = second;
            second = temp;
        }
        slow=head
        while (prev) {
            let temp = slow.next, temp2 = prev.next;
            slow.next = prev;
            prev.next = temp;
            slow = temp;
            prev = temp2;
        }


    }
}
