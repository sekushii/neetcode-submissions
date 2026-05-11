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
     * @return {number[]}
     */
    rightSideView(root) {
        if(!root) return [];
        let level = [root];
        const res = [];
        while(level.length > 0) {
            const nextLevel = [];
            res.push(level[level.length - 1].val);
            for(let i = 0; i<level.length; i++) {
                const node = level[i];
                if(node.left) nextLevel.push(node.left);
                if(node.right) nextLevel.push(node.right);
            }
            level = nextLevel;
        }

        return res;
    }
}
