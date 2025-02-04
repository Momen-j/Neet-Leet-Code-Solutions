/*

Merge Two Sorted Linked Lists
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted linked list and return the head of the new sorted linked list.

The new list should be made up of nodes from list1 and list2.

*/

// TC: O(n + m) Where n is the length of list1 and m is the length of list2.
// SC: O(1)

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
   * @param {ListNode} list1
   * @param {ListNode} list2
   * @return {ListNode}
   */
  mergeTwoLists(list1, list2) {
    // create a dummy node to avoid empty list case
    const dummy = new ListNode();

    // tail of our list is initially the dummy node
    // everytime we add a new node to result list
    // tail pointer is assigned to new node so it remains the end of list
    let tail = dummy;

    // iterate thru list1 and list2 while they aren't null
    while (list1 && list2) {
      // if current list1 node is less than list2 node
      // set tail.next equal to list1 node
      // and set list1 node equal to the next node in list1
      if (list1.val < list2.val) {
        tail.next = list1;
        list1 = list1.next;
      } else {
        // else set tail.next equal to list2 node
        // and set list2 node equal to the next node in list2
        tail.next = list2;
        list2 = list2.next;
      }
      // move tail pointer to next node to continue loop
      tail = tail.next;
    }

    // if list1 is NOT empty, set tail.next = list1
    // else set list2 to tail.next
    if (list1) {
      tail.next = list1;
    } else {
      tail.next = list2;
    }

    // since dummy is right before the beginning of the list now, return the next node which is the head
    return dummy.next;
  }
}
