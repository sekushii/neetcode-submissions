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
     * @return {number[][]}
     */
    levelOrder(root) {
        if(!root) return [];
        const dq = new Deque(), levels = [];
        dq.pushBack(root);
        while(dq.size() > 0) {
            const level = []
            for(let i = 0, l = dq.size(); i < l; i++) {
                const node = dq.popFront();
                level.push(node.val);
                if(node.left) dq.pushBack(node.left);
                if(node.right) dq.pushBack(node.right);
            }
            levels.push(level);
        }

        return levels;
    }
}
