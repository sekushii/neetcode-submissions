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
        const dfs = (node, [lowerLimit, upperLimit]) => {
            if(!node) return true;
            const val = node.val;
            if(val >= upperLimit) return false;
            if(val <= lowerLimit) return false;

            const left = dfs(node.left, [lowerLimit, Math.min(upperLimit, val)]);
            if(!left) return false;
            const right = dfs(node.right, [Math.max(lowerLimit, val), upperLimit]);
            if(!right) return false;

            return true;
        }

        return dfs(root,[-Infinity, Infinity]);
    }
}
