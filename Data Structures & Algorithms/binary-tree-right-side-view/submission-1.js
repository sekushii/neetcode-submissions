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
     * @param {TreeNode} root
     * @return {number[]}
     */
    rightSideView(root) {
        if(!root) return [];
        const q = new Queue();
        q.push(root);
        const res = [];

        while(q.size() > 0) {
            for (let i = 0, l = q.size(); i<l; i++) {
                let node = q.pop();
                if(i === l-1) res.push(node.val);
                if(node.left)q.push(node.left);
                if(node.right)q.push(node.right);
            }
        }
        return res;
    }
}
