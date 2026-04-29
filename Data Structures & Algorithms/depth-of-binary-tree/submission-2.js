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
     * @return {number}
     */
    maxDepth(root) {
        if(!root) return 0;
        let q = new Queue();
        q.push(root);
        let max = 0;

        while(q.size() > 0) {
            max++;
            for(let i = 0, l = q.size(); i<l; i++) {
                const node = q.pop();
                if(node.right) q.push(node.right);
                if(node.left) q.push(node.left);
            }
            // let tmp = []
            // while(stack.length > 0) {
            //     const node = stack.pop();
            //     if(node.right) tmp.push(node.right);
            //     if(node.left) tmp.push(node.left);
            // }
            // stack = tmp
        }

        return max;
    }
}
