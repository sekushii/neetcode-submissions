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
     * @return {TreeNode}
     */
    invertTree(root) {
        const stack = [root];

        while(stack.length > 0) {
            for(let i = 0, length = stack.length; i < length ; i++) {
                const node = stack.shift();
                if(!node) continue;
                const tmp = node.right;
                node.right = node.left;
                node.left = tmp;
                stack.push(node.right);
                stack.push(node.left);
            }
        }
        return root;
    }
}
