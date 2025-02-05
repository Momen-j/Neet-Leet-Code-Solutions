/*

Linked List Cycle Detection
Given the beginning of a linked list head, return true if there is a cycle in the linked list. 
Otherwise, return false.

There is a cycle in a linked list if at least one node in the list that can be visited again by following the next pointer.

Internally, index determines the index of the beginning of the cycle, if it exists. 
The tail node of the list will set it's next pointer to the index-th node. 
If index = -1, then the tail node points to null and no cycle exists.

Note: index is not given to you as a parameter.

*/

// TC: O(n) SC: O(1)

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
  /**
   * @param {ListNode} head
   * @return {boolean}
   */
  hasCycle(head) {
    // init both fast and slow pointers
    let fast = head;
    let slow = head;

    // shift fast & slow pointers WHILE the node at fast pointer isn't null
    // AND the next node after fast isn't null
    while (fast !== null && fast.next !== null) {
      fast = fast.next.next;
      slow = slow.next;

      // if node at fast pointer equal to node at slow pointer
      // return true
      if (fast === slow) {
        return true;
      }
    }

    // return false if while loop was broken out of
    return false;
  }
}
