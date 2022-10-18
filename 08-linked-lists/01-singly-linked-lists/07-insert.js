class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	push(val) {
		let newNode = new Node(val);
		if (!this.head) {
			// both the head and the tail point to the new node
			this.head = newNode;
			this.tail = this.head;
		} else {
			// take the tail, add onto the end
			this.tail.next = newNode;
			// move the tail one spot over
			this.tail = newNode;
		}
		this.length++;

		return this;
	}
	pop() {
		if (!this.head) return undefined;
		// both current and nt start at the head
		let current = this.head;
		let newTail = current;
		while (current.next) {
			newTail = current;
			current = current.next;
		}
		this.tail = newTail;
		this.tail.next = null;
		this.length--;

		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}
		return current;
	}
	// Remove a new node from the beginning of the linked list
	shift() {
		if (!this.head) return undefined;

		let currentHead = this.head;
		this.head = currentHead.next;
		this.length--;

		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}
		return currentHead;
	}
	// Add a new node to the beginning of the linked list
	unshift(val) {
		let newNode = new Node(val);
		let currentHead = this.head;
		if (!currentHead) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.next = currentHead;
			this.head = newNode;
		}
		this.length++;
		return this;
	}
	get(index) {
		if (index < 0 || index >= this.length) return null;

		let counter = 0;
		let current = this.head;
		while (counter !== index) {
			current = current.next;
			counter++;
		}
		return current;
	}
	// Change the value of a node based on its position in the linked list
	set(index, value) {
		let foundNode = this.get(index);
		if (foundNode) {
			foundNode.val = value;
			return true;
		}
		return false;
	}
	// Add a node to the linked list at a specific position
	insert(index, value) {
		if (index < 0 || index > this.length) return false;

		if (index === this.length) {
			this.push(value);
			return true;
		}
		if (index === 0) {
			this.unshift(value);
			return true;
		}

		let newNode = new Node(value);
		let prevNode = this.get(index - 1);
		let temp = prevNode.next; // Placeholding this node, otherwise it will disapear after the prev.next pointer move
		prevNode.next = newNode;
		newNode.next = temp;
		this.length++;
		return true;
	}
}

let list = new SinglyLinkedList();
list.push('How');
list.push('are');
list.push('you');

console.log(list.insert(3, '!!'));
console.log(list.insert(-1, ':)'));
console.log(list.insert(200, ':)'));

console.log(list.get(0));
console.log(list.get(1));
console.log(list.get(2));
console.log(list.get(3));
console.log(list.get(4));
