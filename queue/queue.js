import LinkedList from '../linked-list/LinkedList';

class Queue {
	constructor() {
		this.linkedList = new LinkedList();
	}

	peek() {
		if (!this.linkedList.head) return null;

		return this.linkedList.head.value;
	}

	enqueue(value) {
		this.linkedList.append(value);
	}

	dequeue(value) {
		const removeHead = this.linkedList.deleteHead();

		return removeHead ? removeHead.value : null;
	}
}
