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
    mergeTwoLists(list1, list2) {
        const dummy = new ListNode(0);
        let list3 = dummy;

        while(list1 && list2) {
            if (list1.val <= list2.val) {
                list3.next = list1;
                list3 = list3.next;
                list1 = list1.next
            } else {
                list3.next = list2;
                list3 = list3.next;
                list2 = list2.next
            }
        }
        if(list1) list3.next = list1;
        if(list2) list3.next = list2;

        return dummy.next;
    }
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if (!lists || lists.length === 0) return null;

        while (lists.length > 1) {
            const mergedLists = []
            for(let i = 0; i<lists.length; i+=2) {
                const l1 = lists[i];
                const l2 = lists[i+1] ? lists[i+1] : null;
                mergedLists.push(this.mergeTwoLists(l1,l2));
            }
            lists = mergedLists;
        }
        return lists[0];
    }
}
