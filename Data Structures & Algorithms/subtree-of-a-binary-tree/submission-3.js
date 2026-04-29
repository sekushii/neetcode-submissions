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
        const stringify = node => {
            if (!node) return "#";

            let right = stringify(node.right);
            let left = stringify(node.left);

            return node.val + right + left;
        }
        const main = stringify(root);
        const sub = stringify(subRoot);

        return main.includes(sub);
    }
}
