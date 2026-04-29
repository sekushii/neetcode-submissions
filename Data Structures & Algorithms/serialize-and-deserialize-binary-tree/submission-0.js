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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        const dfs = node => {
            if(!node) return "#";

            const left = dfs(node.left);
            const right = dfs(node.right);

            return `${node.val},${left},${right}`
        }
        return dfs(root);
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        const arr = data.split(",");
        let i = 0;
        // '1,2,#,#,3,4,#,#,5,#,#'
        // '1,2,6,#,7,#,#,#,3,4,#,#,5,#,#'
        const rebuild = () => {
            if (arr[i] === "#") {
                i++;
                return null;
            }
            const node = new TreeNode(arr[i]);
            i++;
            node.left = rebuild();
            node.right = rebuild();

            return node;
        }
        
        return rebuild();
    }
}
