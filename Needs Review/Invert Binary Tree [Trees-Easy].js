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
    // base vase: if the tree is empty return null
    if (root === null) return null;

    // create a new node with the same value as root
    const node = new TreeNode(root.val);

    // swap the children and make recursive calls
    // assign the right subtree to be the inverted left subtree and vice versa
    node.right = this.invertTree(root.left);
    node.left = this.invertTree(root.right);

    // return the newly constructed mirror node
    return node;
  }
}
