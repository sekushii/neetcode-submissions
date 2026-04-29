/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        const q1 = new Queue(), q2 = new Queue();
        q1.push(p);
        q2.push(q);

        while(q1.size() > 0 && q2.size() > 0) {
            
            for (let i = 0, length = q1.size(); i<length; i++) {
                let n1 = q1.pop();
                let n2 = q2.pop();
                if(!n1 && !n2) continue;
                if(!n1 || !n2) return false;
                if(n1.val !== n2.val) return false;

                q1.push(n1.left);
                q1.push(n1.right);
                q2.push(n2.left);
                q2.push(n2.right);
            }
        }

        return q1.size() === 0 && q2.size() === 0;
    }
}
