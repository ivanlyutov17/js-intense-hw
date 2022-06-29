class Stack {
  constructor(length) {
    if (length) this.maxLength = length;
    else this.maxLength = 10;
    this.currentLength = 0;
    this.next = null;
    this.head = null;
    this.tail = null;
  }

  push(value) {
    this.currentLength++;

    if (this.currentLength <= this.maxLength) {
      const newNode = Object.create(null);
      newNode.value = value;
      newNode.next = this.head;
      this.head = newNode;
      if (!this.tail) {
        this.tail = newNode;
      }

      return this;
    } else throw new Error('Стэк переполнен');
  }

  pop() {
    if (!this.tail) {
      this.currentLength = 0;
      throw new Error('Стэк пуст');
    }

    this.currentLength--;
    const deletedTail = this.tail;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;

      return deletedTail;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      if (!currentNode.next.next) {
        currentNode.next = null;
      } else {
        currentNode = currentNode.next;
      }
    }

    this.tail = currentNode;

    return deletedTail;
  }

  peek() {
    if (!this.tail) {
      return null;
    }
    let currentNode = this.head;
    if (this.currentLength === 1) return this.head;
    if (this.isEmpty()) throw new Error('Стэк пустой');
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  isEmpty() {
    if (this.currentLength === 0) return true;
    else return false;
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
    let maxLength = 0;
    if (typeof iterable[Symbol.iterator] === 'function') {
      nodeFromIterable = new Stack();
      for (const elem of iterable) {
        maxLength++;
        nodeFromIterable.push(elem);
      }
      nodeFromIterable.maxLength = maxLength;
      return nodeFromIterable;
    } else throw new Error('Non-iterable');
  }
}

let test = new Stack();
let fromIt = Stack.fromIterable(['1', '2', '3']);

module.exports = { Stack };
