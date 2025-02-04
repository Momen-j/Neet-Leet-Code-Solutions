/*

Reverse Linked List

Given the beginning of a singly linked list head, reverse the list, and return the new beginning of the list.

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
   * @return {ListNode}
   */
  reverseList(head) {
    // init two vars
    // prev tracks the previous pointer/node from the current one
    // curr track the current node being iterated on
    let prev = null;
    let curr = head;

    // iterate thru the linked list until current node is null
    while (curr) {
      // temp var to hold the current node's next value/node
      let temp = curr.next;

      // point current node's next pointer to prev node
      curr.next = prev;

      // shift pointers after reassigning next pointers
      prev = curr;
      curr = temp;
    }

    // at the end of loop, prev is equal to the head of the linked list
    return prev;
  }
}
