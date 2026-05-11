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
     * @return {number[][]}
     */
    levelOrder(root) {
        if(!root) return [];
        let stack = [root];
        const res = [];
        while(stack.length > 0) {
            const level = []
            const temp = [];
            for(let i = 0; i < stack.length; i++) {
                const node = stack[i];
                level.push(node.val);
                if(node.left) temp.push(node.left);
                if(node.right) temp.push(node.right);
            }
            stack = temp;
            res.push(level);
        }
        return res;
    }
}
