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
        let p1 = l1, p2 = l2
        const dummy = new ListNode();
        let curr = dummy;

        let remainder = 0;
        while(p1 || p2) {
            let v1 = p1?.val ?? 0, v2 = p2?.val ?? 0;
            const sum = v1+v2+remainder;
            const val = sum < 10 ? sum : Math.abs(10-sum);
            remainder = sum >= 10 ? 1 : 0;
            curr.next = new ListNode(val)
            curr = curr.next
            p1 = p1?.next;
            p2 = p2?.next;
        }

        if(remainder) curr.next = new ListNode(1)

        return dummy.next;
    }
}
