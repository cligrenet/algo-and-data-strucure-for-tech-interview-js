/*
Implement the following on the DoublyLinkedList class

insert
This internal/helper function should insert a node at a specified index in a DoublyLinkedList. It should return true if the index is valid, and false if the index is invalid (less than 0 or greater than the length of the list).

remove
This function should remove a node at a specified index in a DoublyLinkedList. It should return the removed node. if the index is valid, or undefined if the index is invalid.

var doublyLinkedList = new DoublyLinkedList;
doublyLinkedList.push(5).push(10).push(15).push(20);
doublyLinkedList.insert(2,12); // true
doublyLinkedList.insert(100,12); // false
doublyLinkedList.length // 5
doublyLinkedList.head.val // 5
doublyLinkedList.head.next.val // 10
doublyLinkedList.head.next.next.val // 12
doublyLinkedList.head.next.next.next.val // 15
doublyLinkedList.head.next.next.next.next.val // 20
 
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
		this.prev = null;
		this.next = null;
	}
}

class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	push(val) {
		var node = new Node(val);
		if (this.head === null) {
			this.head = node;
			this.tail = this.head;
			this.length++;
		} else {
			this.tail.next = node;
			node.prev = this.tail;
			this.tail = node;
			this.length++;
		}
		return this;
	}
	pop() {
		if (!this.head) return undefined;
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
		if (!this.head) return undefined;
		// if(this.length === 0) return undefined; // the same as !this.head
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
	unshift(val) {
		let newNode = new Node(val);
		if (this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.head.prev = newNode;
			newNode.next = this.head;
			this.head = newNode;
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
			while (count !== index) {
				current = current.next;
				count++;
			}
		} else {
			count = this.length - 1;
			current = this.tail;
			while (count !== index) {
				current = current.prev;
				count--;
			}
			return current;
		}
	}
	insert(index, val) {
		if (index < 0 || index > this.length - 1) return false;
		if (index === 0) return !!this.unshift(val);
		if (index === this.length - 1) return !!this.push(val);

		let newNode = new Node(val);
		let prevNode = this.get(index - 1);
		let nextNode = prevNode.next;

		prevNode.next = newNode;
		newNode.prev = prevNode;
		newNode.next = nextNode;
		nextNode.prev = newNode;
		this.length++;
		return true;
	}
	remove(index) {
		if (index < 0 || index > this.length - 1) return null;
		if (index === 0) this.shift();
		if (index === this.length - 1) this.pop();

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
