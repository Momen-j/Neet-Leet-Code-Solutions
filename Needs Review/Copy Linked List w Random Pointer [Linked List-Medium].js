// TC: O(n) SC: O(n) (since we use a hash map)

// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
  /**
   * @param {Node} head
   * @return {Node}
   */
  copyRandomList(head) {
    // init hash map where we map old node to copy of new node
    const oldToCopy = new Map();
    // we map null to null such that when first pass iterates and gets to null
    // it auto maps to point to null
    oldToCopy.set(null, null);

    // init current node pointer to head
    let cur = head;

    // FIRST PASS THRU LINKEDLIST (not connecting pointers yet)
    // while cur is not null
    while (cur) {
      // create copy of current node and map current (old node) to the new copy node
      const copy = new Node(cur.val);
      oldToCopy.set(cur, copy);
      // set cur to next to continue iteration
      cur = cur.next;
    }

    // reassign cur to the beginning of the linkedlist
    cur = head;
    while (cur) {
      // get copy of current old node from hashmap
      const copy = oldToCopy.get(cur);

      // set next pointer of copy node to match current node's next val
      // get cur.next key from hash map in order to get copy node to connect to
      copy.next = oldToCopy.get(cur.next);

      // set next pointer of copy node to match current node's next val
      copy.random = oldToCopy.get(cur.random);

      cur = cur.next;
    }

    // give head to get copy of the head which is the start of the copy linkedlist
    return oldToCopy.get(head);
  }
}
