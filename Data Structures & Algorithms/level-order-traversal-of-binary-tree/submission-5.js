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
        let levelNodes = [root];
        const res = [];
        while(levelNodes.length > 0) {
            const level = []
            const nextLevelNodes = [];
            for(let i = 0; i < levelNodes.length; i++) {
                const node = levelNodes[i];
                level.push(node.val);
                if(node.left) nextLevelNodes.push(node.left);
                if(node.right) nextLevelNodes.push(node.right);
            }
            levelNodes = nextLevelNodes;
            res.push(level);
        }
        return res;
    }
}
