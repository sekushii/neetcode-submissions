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
        const dfs = (n1, n2) => {
            if(!n1 && !n2) return true;
            if(!n1 || !n2) return false;
            if(n1.val !== n2.val) return false;
            let l = dfs(n1.left, n2.left);
            if (!l) return false;
            let r = dfs(n1.right, n2.right);
            if (!r) return false;

            return true;
        }

        return dfs(p,q)
    }
}
