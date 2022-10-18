//// Tree traversal
// visit every node once

// Two way:
// Breadth-first search (BFS, accross)
// Depth-first search (DFS, vertical)
// 1- InOrder: get the data sorted in order, from the lowest to the highest.
// 2- PreOrder: can be used to clone/duplicate a tree structure so that it is easily reconstructed or copied.
// 3- PostOrder

// When to use BFS and DFS:
// Time complexity is the same, only visit each node once
// Space complexity:
// - wide tree: BFS takes more space for the queue, better use DFS
// - deep, long tree: DFS would take more space

// Tree summary:
// Trees are non-linear data structures that contain a root and child nodes
// Binary Trees can have values of any type, but at most TWO children for each parent
// Binary Search Trees are a more specific version of binary trees where every node to the left of a parent is less than its value and every node to the right is greater
