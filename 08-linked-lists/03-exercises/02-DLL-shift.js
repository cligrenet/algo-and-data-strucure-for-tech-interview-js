/*
Implement the following on the DoublyLinkedList class

shift
This function should remove a node at the beginning of the DoublyLinkedList. It should return the node removed.

Examples:

var doublyLinkedList = new DoublyLinkedList;
doublyLinkedList.unshift(5); // doublyLinkedList
doublyLinkedList.length; // 1
doublyLinkedList.head.val; // 5
doublyLinkedList.tail.val; // 5
doublyLinkedList.unshift(10); doublyLinkedList 
doublyLinkedList.length; // 2
doublyLinkedList.head.val; // 10
doublyLinkedList.head.next.val; // 5
doublyLinkedList.tail.val; // 5
doublyLinkedList.unshift(15); doublyLinkedList
doublyLinkedList.length; // 3
doublyLinkedList.head.val; // 15
doublyLinkedList.tail.val; // 5
doublyLinkedList.head.next.next.val; // 5
 
doublyLinkedList.shift().val; // 15
doublyLinkedList.length; // 2
doublyLinkedList.shift().val; // 10
doublyLinkedList.length; // 1
doublyLinkedList.shift().val; // 5
doublyLinkedList.length; // 0
doublyLinkedList.pop(); // undefined
doublyLinkedList.length; // 0
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
	shift() {
		if (this.length === 0) return undefined;
		let headNode = this.head;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.head = headNode.next;
			this.head.prev = null;
			headNode.next = null;
		}
		this.length--;
		return headNode;
	}
}
