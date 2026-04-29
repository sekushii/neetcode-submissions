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
     * @return {boolean}
     */
    hasCycle(head) {
        let curr = head, i = 0;
        while(curr) {
            if(!isNaN(curr.i)) return true
            curr.i = i;
            i++;
            curr = curr.next;
        }
        return false;
    }
}
