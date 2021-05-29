class LinkedListNode {
  constructor (value, next = null) {
    this.value = value;
    this.next = next;
  }

  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}

class LinkedList {
  constructor (comparatorFunction) {
    this.head = null;
    this.tail = null;
  }

  prepend(value) {

  }
}
