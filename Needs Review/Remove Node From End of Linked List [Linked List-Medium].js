/*

Remove Node From End of Linked List
You are given the beginning of a linked list head, and an integer n.

Remove the nth node from the end of the list and return the beginning of the list.

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
   * @param {number} n
   * @return {ListNode}
   */
  removeNthFromEnd(head, n) {
    // init a dummy node to be the fake beginning of the list
    // but allows us to be at the node before the one we delete
    // to properly reassign pointers
    const dummy = new ListNode(0, head);
    let left = dummy;
    let right = head;

    // we do this to set right pointer to be appropriate distance away from
    // left pointer such that once right does become null
    // we are at the node right before the one we need to delete
    while (n > 0 && right !== null) {
      right = right.next;
      n--;
    }

    // loop until right reaches the end of the list and
    // shift both right & left pointers
    while (right !== null) {
      left = left.next;
      right = right.next;
    }

    // since right pointer is now null, left pointer is at the node before the deletion node
    // which allows us to properly delete the node by changing the previous node's pointer
    left.next = left.next.next;
    return dummy.next;
  }
}

//

// TWO PASS SOLUTION

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
   * @param {number} n
   * @return {ListNode}
   */
  removeNthFromEnd(head, n) {
    let N = 0;
    let cur = head;
    while (cur) {
      N++;
      cur = cur.next;
    }

    const removeIndex = N - n;
    if (removeIndex === 0) {
      return head.next;
    }

    cur = head;
    for (let i = 0; i < N - 1; i++) {
      if (i + 1 === removeIndex) {
        cur.next = cur.next.next;
        break;
      }
      cur = cur.next;
    }
    return head;
  }
}
