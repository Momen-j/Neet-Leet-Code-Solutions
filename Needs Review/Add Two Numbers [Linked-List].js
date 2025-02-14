// TC: O(n + m) SC: O(1)

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
   * @param {ListNode} l1
   * @param {ListNode} l2
   * @return {ListNode}
   */
  addTwoNumbers(l1, l2) {
    // init a dummy node to not deal with edge cases assoc. with inserting into a linkedlist
    const dummy = new ListNode();
    // cur pointer points at the position we will be inserting the new digit into
    let cur = dummy;

    // init carry value
    let carry = 0;

    // iterate thru nodes while l1 & l2 are not null
    // also if carry is non null then we still want to cont. loop to insert carry
    while (l1 || l2 || carry) {
      // if l1 is not null, then assign v1 to l1.val. if not assign it to 0
      const v1 = l1 ? l1.val : 0;

      // if l2 is not null, then assign v1 to l2.val. if not assign it to 0
      const v2 = l2 ? l2.val : 0;

      // new digit
      let val = v1 + v2 + carry;

      // get carry out of new digit val if 10 or greater, 0 otherwise
      carry = Math.floor(val / 10);

      // value could be greater than 10 so we only want the ones place digit
      val = val % 10;

      // insert digit/val into new linkedList
      cur.next = new ListNode(val);

      // update pointers
      cur = cur.next;
      l1 = l1 ? l1.next : null;
      l2 = l2 ? l2.next : null;
    }

    return dummy.next;
  }
}
