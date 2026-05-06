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
    mergeTwoLists(l1, l2) {
        const head = new ListNode();
        let curr = head;
        while(l1 && l2) {
            if(l1.val < l2.val) {
                curr.next = l1;
                l1 = l1.next;
            } else {
                curr.next = l2;
                l2 = l2.next
            }
            curr = curr.next;
        }
        if(l1) curr.next = l1;
        if(l2) curr.next = l2;
        return head.next;
    }

    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        let i = 0;
        let merged = null;
        while(i<lists.length) {
            if(!merged) {
                merged = this.mergeTwoLists(lists[i], lists[i+1]);
                i+=2;
            } else {
                merged = this.mergeTwoLists(lists[i], merged);
                i++;
            }
        }

        return merged;
    }
}
