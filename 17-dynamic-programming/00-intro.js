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
