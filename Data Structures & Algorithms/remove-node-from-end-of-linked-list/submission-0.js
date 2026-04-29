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
        let prev = null, curr = head, count = 0;
        if(!head.next) return null;

        while(curr){
            count++;
            let temp = curr.next
            curr.next = prev;
            prev = curr;
            curr = temp;
        }
        let rPrev = curr, rCurr = prev, removedIsHead = true;
        for(let i = 0; i<count ; i++) {
            if(i === n) {
                let temp = rCurr.next;
                rCurr.next = rPrev.next;
                rPrev = rCurr;
                rCurr = temp;
                removedIsHead = false;
            } else {
                let temp = rCurr.next;
                rCurr.next = rPrev;
                rPrev = rCurr;
                rCurr = temp;
            }
        }
        return removedIsHead ? head.next : head;
    }
}
