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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        const isSameTree = (p, q) => {
            if(!p && !q) return true;
            if(!p || !q) return false;
            if(p.val !== q.val) return false;

            return isSameTree(p.right, q.right) && isSameTree(p.left, q.left);
        }
        let same = false;
        const dfs = root => {
            if(!root && !subRoot) return same = true;
            if(!root || !subRoot) return;
            if(isSameTree(root, subRoot)) same = true;
            dfs(root.right)
            dfs(root.left)
        }
        dfs(root)
        return same;
    }
}
