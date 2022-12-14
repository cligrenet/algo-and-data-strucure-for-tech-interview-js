// Dynamic Programming basics
// 1- overlapping subproblems
// 2- optimal structure

// Overlapping subproblems:
// - Fibonacci sequence: 1, 1, 2, 3, 5, 8, 13...
/*
                fib(5)
            /           \
        fib(4)   +     fib(3️⃣) 
        /   \          /    \
   fib(3️⃣) + fib(2)   fib(2) + fib(1)
    /   \
fib(2) + fib(1)
*/

// Recursive solution:
// Time complexity: O(2^N) ...quite bad
// O(n!) > O(2^n) > O(n^2) > O(n log(n)) > O(n) > O(log(n)) > O(1)
function fib(n) {
	if (n <= 2) return 1;
	return fib(n - 1) + fib(n - 2);
}

// Optimised solution: --> Memoization (top down)
// Time complexity: O(N)
function fib(n, memo = []) {
	if (memo[n] !== undefined) return memo[n];
	if (n <= 2) return 1;
	let res = fib(n - 1, memo) + fib(n - 2, memo);
	memo[n] = res;
	return res;
}

// Further refactored solution ?
function fib(n, memo = [undefined, 1, 1]) {
	if (memo[n] !== undefined) return memo[n];
	let res = fib(n - 1, memo) + fib(n - 2, memo);
	memo[n] = res;
	return res;
}

// ---------------------------------------------
// Another approach --->  Tabulation (bottom-up):
// Storing the result of a previous result in a 'table' (usually an array)
// Usually down using iteration
// Better SPACE complexity can be achieved using tabulation
// Time complexity: O(N)
function fib(n) {
	if (n <= 2) return 1;
	let fibNums = [0, 1, 1];
	for (let i = 3; i <= n; i++) {
		fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
	}
	return fibNums[n];
}

console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
console.log(fib(6));
console.log(fib(7));

// Optimal structure:
// - Shortest path
/*
   2
A ---> B       D
      2|  \3   |1
       v   v   v
       E ---> C    
           2

Shortest path from :
      A to D    A -> B -> C -> D
      A to C    A -> B -> C
      A to B    A -> B       
 */
