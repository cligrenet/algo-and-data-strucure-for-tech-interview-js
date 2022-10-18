//// Create a stack with array:
//// pop - push
//// shift - unshift (add and remove from the beginning is not good in complexity, since all other indices should be shifted down)

// let stack = [];
// stack.push(1);
// stack.push(2);
// stack.push(3);
// console.log(stack);

// stack.pop();
// console.log(stack);

//----------------------------------

//// Create a stack with singly linked list:
class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}
class Stack {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}
	// To get a complexity of N, constant, use linked list unshift method to do push
	push(val) {
		let newNode = new Node(val);

		if (this.size === 0) {
			this.first = newNode;
			this.last = newNode;
		} else {
			let oldFirst = this.first; // temporary variable
			this.first = newNode;
			newNode.next = oldFirst;
		}

		return ++this.size;
	}
	// To get a complexity of N, constant, use linked list shift method to do pop
	pop() {
		if (this.size === 0) return null;

		let oldFirst = this.first;

		if (this.size === 1) {
			this.last = null;
		} else {
			this.first = oldFirst.next;
		}
		this.size--;
		return oldFirst.val;
	}
}

let stack = new Stack();
stack.push('first');
stack.push('second');
stack.push('third');
console.log(stack);
stack.pop();
console.log(stack);
