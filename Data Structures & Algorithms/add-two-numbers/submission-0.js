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
        let n1="",n2="", curr=l1
        while (curr){
            n1+=curr.val;
            curr=curr.next;
        }
        curr=l2;
        while(curr){
            n2+=curr.val;
            curr=curr.next
        }
        n1 = n1.split('').reverse().join('')
        n2 = n2.split('').reverse().join('')
        let sum = Number(n1)+Number(n2)+'', i = 0, prev=null, l3=null;
        console.log(sum)
        while(i<sum.length){
            let node = new ListNode(sum[sum.length-1-i]);
            if(!l3) l3 =node;
            if(prev) prev.next = node;
            prev = node;
            i++
        }
        return l3
    }
}
