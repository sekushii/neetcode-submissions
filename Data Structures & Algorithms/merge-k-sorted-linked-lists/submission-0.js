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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        let min, idx = 0, nullCount = 0, newList;
        const dummy = new ListNode(-Infinity);
        while (nullCount < lists.length) {
            nullCount = 0;
            for(let i = 0; i<lists.length; i++) {
                if(lists[i] === null) nullCount++;
                else if(!min) {
                    min = lists[i];
                    idx = i;
                }
                else if(lists[i].val < min.val) {
                    min = lists[i];
                    idx = i;
                }
            }
            if(!newList) {
                newList = min;
                dummy.next = newList;
            }
            else {
                newList.next = min;
                newList = min;
            }
            if(nullCount < lists.length)
                lists[idx] = lists[idx].next;
            min = null;
            idx = null;
        }
        return dummy.next;
    }
}
