// Breadth-first search

// check every sibling nodes before looking into any child node
//       10
//     6    15
//   3  8     20
// [10, 6, 15, 3, 8, 20]

// queue, push (enqueue), shift (dequeue)
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
}

let newTree = new BinaryTree();
newTree.insert(10);
newTree.insert(6);
newTree.insert(15);
newTree.insert(3);
newTree.insert(8);
newTree.insert(20);
// console.log(newTree);
console.log(newTree.bfs()); // [ 10, 6, 15, 3, 8, 20 ]
