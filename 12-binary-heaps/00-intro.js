// Binary Heaps:
// A type of a heap, which is a type of a tree
// MaxBinaryHeap and MinBinaryHeap

// ----------------------
// MaxBinaryHeap:
// - Parent nodes are always larger > child nodes
// - But no implied ordering between sibling nodes
// - Each parent has at most TWO child nodes
// - Binary heaps are as compact as possible, all the children of each node are as full as they can be and left children are filled out first

// ie:
//        100
//     19      36
//   17  3   25   1
// 2   7

// MinBinaryHeap, parend nodes are always smaller < child nodes

// ie:
//            1
//       2          3
//   17    19     36   7
// 25 100

// ----------------------
// Priority Queue
// Kind of a MinBinaryHeap

// ----------------------
// Complexity of Binary Heaps:
// Insertion - 🤟 O(log n) -> compare one time per level
// Removal - 🤟 O(log n)
// Search - O(n) -> not really be made for searching

// NOTE Log n === log base 2 of n
