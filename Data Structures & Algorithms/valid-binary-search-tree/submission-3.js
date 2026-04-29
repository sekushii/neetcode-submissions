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
    isValidBST(root) {
        const dfs = (node, [lower, upper]) => {
            if(!node) return true;
            const val = node.val;
            if(val >= upper || val <= lower) return false;

            return dfs(node.left, [lower, val]) && 
            dfs(node.right, [val, upper]);
        }

        return dfs(root,[-Infinity, Infinity]);
    }
}
