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
        const dfs = (node) => {
            if (!node) return [0, true];
            let [left, lBal] = dfs(node.left);
            let [right, rBal] = dfs(node.right);

            return [1 + Math.max(left, right), Math.abs(left-right) < 2 && lBal && rBal];
        }
        
        return dfs(root)[1];
    }
}
