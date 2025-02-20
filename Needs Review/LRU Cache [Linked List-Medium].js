/*

LRU Cache
Implement the Least Recently Used (LRU) cache class LRUCache. The class should support the following operations

LRUCache(int capacity) Initialize the LRU cache of size capacity.

int get(int key) Return the value corresponding to the key if the key exists, otherwise return -1.

void put(int key, int value) Update the value of the key if the key exists. 
Otherwise, add the key-value pair to the cache. 
If the introduction of the new pair causes the cache to exceed its capacity, remove the least recently used key.

A key is considered used if a get or a put operation is called on it.

Ensure that get and put each run in O(1) average time complexity.

*/


// TC: O(1) for each put() & get() operation SC: O(n) due to hashmap
// create a node class to properly use linked lists in this solutions
class Node {
  /**
   * @param {number} key
   * @param {number} val
   */
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  /**
   * @param {number} capacity
   */
  constructor(capacity) {
    this.cap = capacity;
    // rep. our LRUCache. Will map keys to pointers that point to nodes
    this.cache = new Map();

    // init dummy nodes to add onto left and right of linked list
    // left node will help us ID LRU node
    // right node will help us ID most recently used node
    this.left = new Node(0, 0);
    this.right = new Node(0, 0);

    // we want the dummy nodes to be connected to each other b/c
    // when we put a new node into the cache we want it in between
    // left and right nodes
    this.left.next = this.right;
    this.right.prev = this.left;
  }

  /**
   * @param {Node} node
   */
  // remove node from list (pointer helper function)
  remove(node) {
    // take prev and next nodes of node and make them point at each other
    const prev = node.prev;
    const nxt = node.next;
    prev.next = nxt;
    nxt.prev = prev;
  }

  /**
   * @param {Node} node
   */
  // insert at rightmost position not including the right dummy node (pointer helper function)
  insert(node) {
    const prev = this.right.prev;
    prev.next = node;
    node.prev = prev;
    node.next = this.right;
    this.right.prev = node;
  }

  /**
   * @param {number} key
   * @return {number}
   */
  get(key) {
    // Everytime we call the get method to get a val
    // we need to update the node to be the most recently used
    if (this.cache.has(key)) {
      const node = this.cache.get(key);
      // remove the node from list then reinsert it so that
      // it appears in the right most position (not including right dummy node)
      this.remove(node);
      this.insert(node);

      return node.val;
    }
    return -1;
  }

  /**
   * @param {number} key
   * @param {number} value
   * @return {void}
   */
  put(key, value) {
    // if a key already exists in our cache, we remove the existing
    // version of it in the list before adding the new key val pair
    if (this.cache.has(key)) {
      this.remove(this.cache.get(key));
    }

    // create a new node representing the key val pair
    const newNode = new Node(key, value);
    // add the key and node (pointer) into cache map
    this.cache.set(key, newNode);
    // insert newNode into rightmost position in linked list
    // (not including right dummy node)
    this.insert(newNode);

    // check to see if length of cache exceed capacity, if so
    // remove the LRU node from the linked list and cache map
    if (this.cache.size > this.cap) {
      // remove from the list and delete the LRU from the hashmap
      const lru = this.left.next; // <- Will always be the LRU
      this.remove(lru);
      this.cache.delete(lru.key);
    }
  }
}
