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
        const stack = [[root]];
        let level = 0;

        while(true) {
            let currLevel = stack[level];
            stack.push([]);
            for(let i = 0; i<currLevel.length; i++) {
                const node = currLevel[i];
                if(node.left) stack[level+1].push(node.left);
                if(node.right) stack[level+1].push(node.right);
                currLevel[i] = node.val;
            }
            if(stack[level+1].length === 0) {
                stack.pop();
                break;
            }
            level++
        }
        return stack;
    }
}
