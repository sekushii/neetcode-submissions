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
    maxPathSum(root) {
        let max = -Infinity;

        const dfs = root => {
            if(!root) return 0;
            const left = Math.max(dfs(root.left), 0);
            const right = Math.max(dfs(root.right), 0);
            const localSum = root.val + left + right;
            max = Math.max(max, localSum);

            return root.val + Math.max(left, right);
        }

        dfs(root);
        return max;
    }
}
