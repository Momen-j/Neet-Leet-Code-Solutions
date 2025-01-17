/*

Time Based Key-Value Store
Solved 
Implement a time-based key-value data structure that supports:

Storing multiple values for the same key at specified time stamps
Retrieving the key's value at a specified timestamp
Implement the TimeMap class:

TimeMap() Initializes the object.
void set(String key, String value, int timestamp) Stores the key key with the value value at the given time timestamp.
String get(String key, int timestamp) Returns the most recent value of key if set was previously called on it and the most recent timestamp for that key prev_timestamp is less than or equal to the given timestamp (prev_timestamp <= timestamp). If there are no values, it returns "".
Note: For all calls to set, the timestamps are in strictly increasing order.

*/

/*
Time complexity: O(1) for set() and O(logn) for get().
Space complexity: O(m∗n)

Where n is the total number of values associated with a key and m is the total number of keys.
*/

class TimeMap {
  constructor() {
    // key = string
    // value = list of [timestamp, value]
    this.keyStore = new Map();
  }

  /**
   * @param {string} key
   * @param {string} value
   * @param {number} timestamp
   * @return {void}
   */
  set(key, value, timestamp) {
    // inserting a key value pair based on the key, value, & timestamp

    // if the key doesn't exist within keystore
    // create a new key value pair
    if (!this.keyStore.has(key)) {
      this.keyStore.set(key, []);
    }

    // EVEN if key does previously exist, we still need to push
    // to track all value pairs
    // push value pair into keyStore
    this.keyStore.get(key).push([timestamp, value]);
  }

  /**
   * @param {string} key
   * @param {number} timestamp
   * @return {string}
   */
  get(key, timestamp) {
    const values = this.keyStore.get(key) || [];
    let left = 0;
    let right = values.length - 1;
    let result = "";

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (values[mid][0] <= timestamp) {
        result = values[mid][1];
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return result;
  }
}
