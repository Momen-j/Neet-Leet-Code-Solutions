/*

Reorder Linked List
You are given the head of a singly linked-list.

The positions of a linked list of length = 7 for example, can intially be represented as:

[0, 1, 2, 3, 4, 5, 6]

Reorder the nodes of the linked list to be in the following order:

[0, 6, 1, 5, 2, 4, 3]

Notice that in the general case for a list of length = n 
the nodes are reordered to be in the following order:

[0, n-1, 1, n-2, 2, n-3, ...]

You may not modify the values in the list's nodes, but instead you must reorder the nodes themselves.

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
   * @return {void}
   */
  reorderList(head) {
    // find middle point of list using slow & fast pointers
    // have to set fast to head.next for mid point to be found properly
    let slow = head;
    let fast = head.next;

    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    }

    // second is the node rep. the beginning of the second half of the list
    let second = slow.next;

    // SPLITTING LIST IN HALF

    // beginning to reverse linked list by pointing node at start
    // of second half to point at null for next node
    // (also takes care of edge case where the last/tail node .next has to point at null)
    // Essentially severs connection to original list

    /*
        slow.next = null:

        First half: 1 → 2 → 3 → null
        Second half: 4 → 5
        */

    let prev = (slow.next = null);

    // logic to reverse second half of list
    // after loop is done second is set to null & prev is set to the last node iterated on
    // AKA head of the second half of the list
    while (second !== null) {
      const tmp = second.next;
      second.next = prev;
      prev = second;
      second = tmp;
    }

    // merge the two halves
    let first = head;
    second = prev;

    // iterate until first or second pointer is null
    // since second half of list will most likely be shorter, iterate until second is null
    while (second !== null) {
      // re order list and keep temp vars to maintain connections to linked lists
      const tmp1 = first.next;
      const tmp2 = second.next;
      first.next = second;
      second.next = tmp1;
      // shift pointers to continue loop logic
      first = tmp1;
      second = tmp2;
    }
  }
}

// BRUTE FORCE

// TC: O(n) SC: O(n)

class Solution {
  /**
   * @param {ListNode} head
   * @return {void}
   */
  reorderList(head) {
    if (!head) return;

    const nodes = [];
    let cur = head;
    while (cur) {
      nodes.push(cur);
      cur = cur.next;
    }

    let i = 0,
      j = nodes.length - 1;
    while (i < j) {
      nodes[i].next = nodes[j];
      i++;
      if (i >= j) break;
      nodes[j].next = nodes[i];
      j--;
    }

    nodes[i].next = null;
  }
}
