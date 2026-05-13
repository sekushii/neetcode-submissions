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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let res;
        const dfs = root => {
            if(!root || k === 0) return;

            dfs(root.left);
            k--;
            if(k===0) {
                res = root;
                return;
            }
            dfs(root.right);
        }

        dfs(root);
        return res.val;
    }
}
