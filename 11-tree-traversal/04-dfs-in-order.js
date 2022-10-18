// Depth-first search

//       10
//     6    15
//   3  8     20

// In-order
// [3, 6, 8, 10, 15, 20]
// left -> root -> right

class Node {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

class BinaryTree {
	constructor() {
		this.root = null;
	}
	insert(val) {
		let newNode = new Node(val);
		if (this.root === null) {
			this.root = newNode;
			return this;
		}

		let current = this.root;
		while (true) {
			if (val === current.val) return undefined; // handle duplicate insertion
			if (val < current.val) {
				if (current.left === null) {
					current.left = newNode;
					return this;
				}
				current = current.left;
			} else {
				if (current.right === null) {
					current.right = newNode;
					return this;
				}
				current = current.right;
			}
		}
	}
	bfs() {
		let queue = [];
		let data = [];
		let node = this.root;

		queue.push(node);

		while (queue.length) {
			node = queue.shift();
			data.push(node.val);
			if (node.left) queue.push(node.left);
			if (node.right) queue.push(node.right);
		}
		return data;
	}

	// Recursively
	dfsPreOrder() {
		let data = [];
		let current = this.root;
		// helper function
		function traverse(node) {
			data.push(node.val);
			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);
		}
		// invoke the helper function with the current variable
		traverse(current);
		return data;
	}
	// Recursively
	dfsPostOrder() {
		let data = [];
		let current = this.root;
		function traverse(node) {
			// explore left and right first, then push the node value to the data array
			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);
			data.push(node.val);
		}
		traverse(current);
		return data;
	}
	// Recursively
	dfsInOrder() {
		let data = [];
		let current = this.root;
		function traverse(node) {
			if (node.left) traverse(node.left);
			data.push(node.val);
			if (node.right) traverse(node.right);
		}
		traverse(current);
		return data;
	}
}

let newTree = new BinaryTree();
newTree.insert(10);
newTree.insert(6);
newTree.insert(15);
newTree.insert(3);
newTree.insert(8);
newTree.insert(20);
// console.log(newTree);
console.log(newTree.dfsInOrder()); // [ 3, 6, 8, 10, 15, 20 ]
