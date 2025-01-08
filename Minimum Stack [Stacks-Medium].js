/*

Minimum Stack
Design a stack class that supports the push, pop, top, and getMin operations.

MinStack() initializes the stack object.
void push(int val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.
Each function should run in O(1) time.

*/

// TC: O(1) // SC: O(n)

class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = []; // this stack keeps track of what the current min is
  }

  /**
   * @param {number} val
   * @return {void}
   */
  push(val) {
    this.stack.push(val);

    // take minumum of input value and top of min stack then push value into
    // the min stack
    // Ternary operation is will return val if this.minStack is empty & returns top of minStack if not
    val = Math.min(
      val,
      this.minStack.length === 0 ? val : this.minStack[this.minStack.length - 1]
    );

    // add current minimum val into minStack
    this.minStack.push(val);
  }

  /**
   * @return {void}
   */
  pop() {
    // need to pop minStack as well in order to match what stack's minimum is
    this.stack.pop();
    this.minStack.pop();
  }

  /**
   * @return {number}
   */
  top() {
    // return last element in the stack
    return this.stack[this.stack.length - 1];
  }

  /**
   * @return {number}
   */
  getMin() {
    // since we are tracking what the min is thru our push and pop methods
    // we return the top of the minStack to get the minimum
    return this.minStack[this.minStack.length - 1];
  }
}

///

// Brute Force Solution
// TC: O(n) for getMin() and O(1) for other operations. // SC: O(n) for getMin() and O(1) for other operations
class MinStack {
  constructor() {
    this.stack = [];
  }

  /**
   * @param {number} val
   * @return {void}
   */
  push(val) {
    this.stack.push(val);
  }

  /**
   * @return {void}
   */
  pop() {
    this.stack.pop();
  }

  /**
   * @return {number}
   */
  top() {
    return this.stack[this.stack.length - 1];
  }

  /**
   * @return {number}
   */
  getMin() {
    const tmp = [];
    let mini = this.stack[this.stack.length - 1];

    while (this.stack.length > 0) {
      mini = Math.min(mini, this.stack[this.stack.length - 1]);
      tmp.push(this.stack.pop());
    }

    while (tmp.length > 0) {
      this.stack.push(tmp.pop());
    }

    return mini;
  }
}

///

// One Stack Solution
// TC: O(1) // SC: O(n)
class MinStack {
  constructor() {
    this.min = Infinity;
    this.stack = [];
  }

  /**
   * @param {number} val
   * @return {void}
   */
  push(val) {
    if (this.stack.length === 0) {
      this.stack.push(0);
      this.min = val;
    } else {
      this.stack.push(val - this.min);
      if (val < this.min) this.min = val;
    }
  }

  /**
   * @return {void}
   */
  pop() {
    if (this.stack.length === 0) return;

    const pop = this.stack.pop();

    if (pop < 0) this.min -= pop;
  }

  /**
   * @return {number}
   */
  top() {
    const top = this.stack[this.stack.length - 1];
    return top > 0 ? top + this.min : this.min;
  }

  /**
   * @return {number}
   */
  getMin() {
    return this.min;
  }
}
