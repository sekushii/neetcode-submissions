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
        let isEqual = true;
        const dfs = (p, q) => {
            if(p?.val !== q?.val) return isEqual = false;
            if(!p) return;

            dfs(p.right,q.right)
            dfs(p.left,q.left)
        }

        dfs(p, q)

        return isEqual;
    }
}
