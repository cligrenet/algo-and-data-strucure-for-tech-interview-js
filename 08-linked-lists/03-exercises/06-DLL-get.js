/*
Implement the following on the DoublyLinkedList.prototype

get
This internal/helper function should find a node at a specified index in a DoublyLinkedList. It should return the found node.

Examples

(Note: you don't need to re-implement push, the tests will be provided with it.)

var doublyLinkedList = new DoublyLinkedList();
 
doublyLinkedList.push(5).push(10).push(15).push(20);
doublyLinkedList.get(0).val // 5
doublyLinkedList.get(1).val // 10
doublyLinkedList.get(2).val // 15
doublyLinkedList.get(3).val // 20
doublyLinkedList.get(4) // null
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
		return current;
	}
}
