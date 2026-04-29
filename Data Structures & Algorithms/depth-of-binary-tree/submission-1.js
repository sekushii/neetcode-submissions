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
    maxDepth(root) {
        if(!root) return 0;
        let stack = [root];
        let max = 0;

        while(stack.length > 0) {
            max++;
            let tmp = []
            while(stack.length > 0) {
                const node = stack.pop();
                if(node.right) tmp.push(node.right);
                if(node.left) tmp.push(node.left);
            }
            stack = tmp
        }

        return max;
    }
}
