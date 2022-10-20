/*
Adjacency Matrix:
- Takes up more space (in sparse graphs)
- Slower to iterate over all edges
- 🤟 Faster to loopup specific edge

Complexity: 
  V = # of vertices
  E = # of edges
Add vertex       O(V^2)
Add edge         O(1)
Remove vertex    O(V^2)
Remove edge      O(1)
Query            O(1)
Storage          O(V^2)

                A ---- B
               /         \ 
              F           c
               \         /
                 E ---- D  

-   A  B  C  D  E  F
A   0  1  0  0  0  1
B   1  0  1  0  0  0
C   0  1  0  1  0  0
D   0  0  1  0  1  0
E   0  0  0  1  0  1
F   1  0  0  0  1  0
*/
