//// Objects
// 1-no order
// 2-fast access/insertion and removal -> insertion/removal/access - O(1), searching - O(n)
// 3-methods :
// Object.keys - O(n)
// Object.values - O(n)
// Object.entries - O(n)
// hasOwnProperty - O(1)

//// Arrays
// 1-ordered lists
// 2-fast access/insertion/removal(sort of) -> access - O(1), searching - O(n), insertion/removal  - it depends...push and pop are always faster then shift and unshift
// 3-methods:
// push/pop - O(1)
// shift/unshift - O(n)
// concat/ slice/ splice - O(n)
// sort - O(n*logn) <---------- slowest
// forEach/map/filter/reduce... - O(n)
