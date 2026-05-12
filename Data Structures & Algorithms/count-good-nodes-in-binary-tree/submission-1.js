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
    goodNodes(root) {
        const goodNodes = [];
        const dfs = (root, max) => {
            if(!root) return;
            if(root.val >= max) {
                goodNodes.push(root)
            }

            dfs(root.left, Math.max(max, root.val));
            dfs(root.right, Math.max(max, root.val));
        }

        dfs(root, -101);

        return goodNodes.length;
    }
}
