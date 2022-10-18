/**
reverse
This function should reverse all of the nodes in a DoublyLinkedList, and should return the list.

let doublyLinkedList = new DoublyLinkedList;
doublyLinkedList.push(5).push(10).push(15).push(20)
doublyLinkedList.reverse(); // singlyLinkedList;
doublyLinkedList.length; // 4
doublyLinkedList.head.val); // 20
doublyLinkedList.head.next.val; // 15
doublyLinkedList.head.next.next.val; // 10
doublyLinkedList.head.next.next.next.val; // 5
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
	print() {
		let arr = [];
		let current = this.head;
		while (current) {
			arr.push(current.val);
			current = current.next;
		}
		console.log(arr);
	}
	reverse() {
		let node = this.head; // temporary variable
		this.head = this.tail;
		this.tail = node;

		let prev = null; // want to make sure the tail by the end points to null
		let next;
		for (let i = 0; i < this.length; i++) {
			next = node.next;
			node.next = prev;
			prev = node; // shift things over, previous node is where the node used to be (move one thing over)
			node = next; // shift things over, current node moves to the next node (move one thing over)
		}
		return this;
	}
}

//          Head->T           Tail->H
//           |                 |
//  null     5 -> 10 -> 15 -> 20
//  prev    node  next

//  nul  <-  5    10
//          prev  node

let doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.push(5).push(10).push(15).push(20);
doublyLinkedList.print();
doublyLinkedList.reverse();
doublyLinkedList.print();
