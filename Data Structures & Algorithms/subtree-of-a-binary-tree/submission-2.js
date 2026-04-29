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
        const compareSub = (node, snode) => {
            if (!node && !snode) return true;
            if (!node || !snode) return false;
            if (node.val !== snode.val) return false;

            let right = compareSub(node.right, snode.right);
            let left = compareSub(node.left, snode.left);

            return right && left;
        }

        const dfs = root => {
            if(!root) return false;
            if (compareSub(root, subRoot)) return true;
            
            return dfs(root.right) ||
            dfs(root.left);
        }

        return dfs(root);
    }
}
