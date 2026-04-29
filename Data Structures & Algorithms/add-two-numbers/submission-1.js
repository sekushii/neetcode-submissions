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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let dummy = new ListNode();
        let curr = dummy;
        let carry = 0;
        while(l1 && l2) {
            const sum = l1.val + l2.val + carry;
            const val = sum%10
            carry = Math.floor(sum/10);
            curr.next = new ListNode(val);
            curr = curr.next;
            l1 = l1.next;
            l2 = l2.next;
        }
        let remaining = l1 ? l1 : l2 ? l2 : null;

        while(remaining) {
            const sum = remaining.val + carry;
            const val = sum%10
            carry = Math.floor(sum/10);
            curr.next = new ListNode(val);
            curr = curr.next;
            remaining = remaining.next;
        }

        if (carry > 0) {
            curr.next = new ListNode(carry);
        }

        return dummy.next;
    }
}
