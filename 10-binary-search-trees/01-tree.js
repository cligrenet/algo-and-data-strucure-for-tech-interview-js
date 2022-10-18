class Node {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}
	// Insertion - O(log n), worst case O(n) (ie. a tree which is entirely one-sided)
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
	// Check if tree contains value
	// Searching - O(log n), worst case O(n) (ie. a tree which is entirely one-sided)
	find(val) {
		if (this.root === null) return false;

		let current = this.root;
		let found = false;
		while (!found && current) {
			if (val > current.val) {
				current = current.right;
			} else if (val < current.val) {
				current = current.left;
			} else {
				return true;
			}
		}
		return false;
	}
}

let tree = new BinarySearchTree();
// tree.root = new Node(10);
// tree.root.right = new Node(15);
// tree.root.left = new Node(7);
// tree.root.left.right = new Node(9);
// console.log(tree);

//      10
//   5        13
// 2  7     11  16
tree.insert(10);
tree.insert(5);
tree.insert(2);
tree.insert(7);
tree.insert(13);
tree.insert(11);
tree.insert(16);
console.log(tree);
console.log(tree.find(16)); // true
console.log(tree.find(100)); // false
