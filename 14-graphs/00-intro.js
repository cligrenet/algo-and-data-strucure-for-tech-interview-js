// Graphs
// Nodes + Connections

// Uses of graphs:
// - Social networks
// - Location/ Mapping
// - Routing algorithms
// - Visual hierarchy
// - File system optimizations
// - Recommendations data stored ...

// Essential graph terms (Terminology):
// Vertex - a node
// Edge - connection between nodes
// Weighted/Unweighted - values assigned to distances between vertices
// Directed/Undirected - directions assigned to distances between vertices

// Types of graphs:
// - undirected unweighted
// - directed unweighted
// - undirected weighted
// - directed weighted

// Strategies to store graphs:
// - Adjacency matrix
// - Adjacency list

/*
Differences & Complexity:
  V = # of vertices
  E = # of edges
  
Operation        Adjacency List    Adjacency Matix
Add vertex       O(1)              O(V^2)
Add edge         O(1)              O(1)
Remove vertex    O(V+E)            O(V^2)
Remove edge      O(E)              O(1)
Query            O(V+E)            O(1)
Storage          O(V+E)            O(V^2)

*/
