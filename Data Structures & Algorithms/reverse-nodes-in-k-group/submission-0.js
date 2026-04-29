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
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        const dummy = new ListNode(0, head);
        let groupPrev = dummy;

        const getKthNode = (k, curr) => {
            while (curr && k>0){
                curr = curr.next;
                k--;
            }
            return curr;
        }

        while (true) {
            let kth = getKthNode(k, groupPrev);
            if(!kth) break;

            let curr = groupPrev.next;
            let groupNext = kth.next;
            let prev = kth.next;

            while(curr !== groupNext) {
                let tmp = curr.next;
                curr.next = prev;
                prev = curr;
                curr = tmp;
            }

            let tmp = groupPrev.next;
            groupPrev.next = kth;
            groupPrev = tmp;
        }

        return dummy.next;
    }
}
