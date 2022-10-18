//// Time complexity:
// Count the number of simple operations the computer has to perform
// Regardless of the exact number, the number of operations grows roughly proportionally with n
// Constants don't matter

// runtime of an algo -> grow trend

// f(n) could be:
// 1-linear (f(n) = n)
// 2-quadratic (f(n) = n*n)
// 3-constant (f(n) = 1)
// 4-logarithmic (f(n) = log(n)) -> great! efficient searching algo, recursion...
// something else

// Big O shorhands:
// 1-arithmetic operations are constant
// 2-variable assignment is constant
// 3-accessing elements in an array (by index) or object (by key) is constant
// 4-in a loop, the complexity is the length of the loop times the complexity of whatever happens inside of the loop
// ie: if nested -> n*n

// runtime:
// n*n > nlogn > n > logn > 1

//// Space complexity:
// 1-most primitives(bool, num, undefined, null) are constant space
// 2-strings require O(n) space (where n is the string length)
// 3-reference types are generally O(n), where n is the length (for arrays) or the number of keys (for objects)

//// Logarithm
// The logarithm of a number roughly measures the number of times you can divide that number by 2 before you get a value that's less than or equal to one.
// ie: 8 / 2 = 4 / 2 = 2 / 2 = 1

// log base 2 of value = exponent ----> 2^exponent = value
// ie: log 2 (8) = 3     ----> 2^3 = 8
