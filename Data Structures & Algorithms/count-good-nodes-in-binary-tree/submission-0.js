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
        const good = [];
        const dfs = (node, max) => {
            if(!node) return;

            if(node.val >= max) good.push(node.val);
            max=Math.max(max, node.val);

            dfs(node.right, max);
            dfs(node.left, max);
        }
        dfs(root, root.val)
        return good.length;
    }
}
