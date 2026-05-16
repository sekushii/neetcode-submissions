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
        let str = ""

        const parse = root => {
            if(!root) return str += 'N,';
            str += root.val + ',';

            parse(root.left);
            parse(root.right);
        }

        parse(root);
        return str;
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        const splitData = data.split(',')
        let i = 0;
        const rebuild = () => {
            if(splitData[i] === "N") {
                i++
                return null;
            }
            const root = new TreeNode(splitData[i]);
            i++;
            root.left = rebuild()
            root.right = rebuild()

            return root;
        }

        return rebuild()
    }
}
