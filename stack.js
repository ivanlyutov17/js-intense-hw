///1

class Stack {
  constructor(capacity = 10) {
    if (typeof capacity !== 'number' && typeof capacity !== 'null') {
      throw new Error('Capacity of stack is not a number!');
    }
    this.capacity = capacity;
    this.elements = [];
    this.length = 0;
  }

  push(elem) {
    if (this.length === this.capacity) {
      throw new Error('Stack overflow!');
    }
    this.elements[this.length] = elem;
    this.length++;
  }
  pop() {
    if (!this.length) {
      throw new Error('Stack is empty!!!');
    }
    this.length--;
    this.deleted = this.elements[this.length];
    delete this.elements[this.length];
    return this.deleted;
  }
  peek() {
    if (!this.length) {
      return null;
    }
    return this.elements[this.length - 1];
  }

  isEmpty() {
    return !this.length;
  }

  toArray() {
    let result = [];
    let copy = Object.assign(new Stack(), structuredClone(this));
    while (copy.peek()) {
      result.push(copy.pop());
    }
    result = result.reverse();
    return result;
  }

  static fromIterable(iterable) {
    if (typeof iterable[Symbol.iterator] !== 'function') {
      throw new Error(`Not iterable!`);
    }
    let newStack = new Stack();
    for (let e of iterable) {
      newStack.push(e);
    }
    return newStack;
  }
}

///2

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newNode = Object.create(null);
    newNode.value = value;
    newNode.next = null;

    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }

    this.tail.next = newNode;

    this.tail = newNode;

    return this;
  }

  prepend(value) {
    const newNode = Object.create(null);
    newNode.value = value;
    newNode.next = this.head;

    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }

    return this;
  }

  find(value) {
    if (!this.head) {
      return null;
    }

    let currentNode = this.head;

    while (currentNode) {
      if (value !== undefined && currentNode.value === value) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }

    return null;
  }

  toArray() {
    const nodes = [];

    let currentNode = this.head;

    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }

    return nodes;
  }

  static fromIterable(iterable) {
    let nodeFromIterable;
    if (typeof iterable[Symbol.iterator] === 'function') {
      nodeFromIterable = new LinkedList();
      for (const elem of iterable) {
        nodeFromIterable.append(elem);
      }
      return nodeFromIterable;
    } else throw new Error('Non-iterable');
  }
}

module.exports = { Stack };
