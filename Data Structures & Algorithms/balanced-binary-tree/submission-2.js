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
     * @return {boolean}
     */
    isBalanced(root) {
        let isBalanced = true;
        const dfs = root => {
            if (!root) return 0;

            const r = dfs(root.right)
            const l = dfs(root.left)

            if(Math.abs(r-l) > 1) isBalanced = false;

            return 1+Math.max(r,l)
        }
        dfs(root)

        return isBalanced;
    }
}
