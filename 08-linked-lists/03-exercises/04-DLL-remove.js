/**
Implement the following on the DoublyLinkedList class

remove
This function should remove a node at a specified index in a DoublyLinkedList. It should return the removed node. if the index is valid, or undefined if the index is invalid.

Examples

(Note: you don't need to re-implement push, the tests will be provided with it)

var doublyLinkedList = new DoublyLinkedList;
doublyLinkedList.push(5).push(10).push(15).push(20);
doublyLinkedList.remove(2).val; // 15
doublyLinkedList.remove(100); // undefined
doublyLinkedList.length // 3
doublyLinkedList.head.val // 5
doublyLinkedList.head.next.val // 10
doublyLinkedList.head.next.next.val // 20
 */

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
		this.prev = null;
	}
}

class DoublyLinkedList {
	constructor(val) {
		this.val = val;
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	push(val) {
		var node = new Node(val);
		if (this.head === null) {
			this.head = node;
			this.tail = this.head;
		} else {
			this.tail.next = node;
			node.prev = this.tail;
			this.tail = node;
		}
		this.length++;
		return this;
	}
	pop() {
		if (this.length === 0) return undefined;
		let poppedNode = this.tail;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.tail = poppedNode.prev;
			this.tail.next = null;
			poppedNode.prev = null;
		}
		this.length--;
		return poppedNode;
	}
	shift() {
		if (this.length === 0) return undefined;
		let removedNode = this.head;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.head = removedNode.next;
			this.head.prev = null;
			removedNode.next = null;
		}
		this.length--;
		return removedNode;
	}
	get(index) {
		if (index < 0 || index > this.length - 1) return null;
		let count, current;
		if (index <= this.length / 2) {
			count = 0;
			current = this.head;
			while (index !== count) {
				current = current.next;
				count++;
			}
		} else {
			count = this.length - 1;
			current = this.tail;
			while (index !== count) {
				current = current.prev;
				count--;
			}
		}
		return this;
	}

	remove(index) {
		if (index < 0 || index > this.length - 1) return undefined;
		if (index === 0) return this.shift();
		if (index === this.length - 1) return this.pop();

		let removedNode = this.get(index);
		let prevNode = removedNode.prev;
		let nextNode = removedNode.next;

		prevNode.next = nextNode;
		nextNode.prev = prevNode;

		removedNode.next = null;
		removedNode.prev = null;

		this.length--;
		return removedNode;
	}
}
