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
        const stack = [root];
        const res = [];
        while(stack.length > 0) {
            const level = []
            for(let i = 0, length = stack.length; i<length; i++) {
                const node = stack.shift();
                if(!node) continue;
                level.push(node.val);
                stack.push(node.left, node.right);
            }
            res.push(level);
        }
        res.pop();
        return res;
    }
}
