//// Singly Linked Lists

// Linked list :
// A data structure that contains a "head", "tail" and "length" property.
// Consist of nodes, each node has a value and a pointer to another node or null (connected via nodes with a "next" pointer)
// No index
// Random access is not allowed
// Good at insertion and deletion

// Arrays:
// Indexed in order!
// Insertion and deletion can be expensive
// Can quickly be accessed at a specific index

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

let first = new Node('Hi');
first.next = new Node('there');
first.next.next = new Node('!');

console.log(first);

// Complexity:
// Insertion - 🤟 O(1)
// Removal - 🤟 O(1) remove from the beginning OR O(n) remove from the end
// Searching - O(n)
// Access - O(n)
