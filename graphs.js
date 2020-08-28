// finite (possibly mutable) set of vertices or nodes or points
// set of unordered pairs for undirected graph, or ordered pairs for directed graph
// nodes + connections
// social networks, mapping, routing, visual hierarchy, file system optimizations, recommendations, etc.
// vertex - node
// edge - connection 
// directed/undirected
// weighted/unweighted - edge with values
// tree - graph with one path from one node to another

// adjacency matrix  / adjacency list

// adjacency matrix
// rows and columns (e.g. 0/1 to indicate presence of edge, or a value for weighted edge)
// o(1) for adding, removing edge, querying
// o(v^2) for adding, removing vertex, storage
// takes up more spade in sparse graphs, slower to iterate over all edges
// faster to look up specific edge

// adjacency list
// array of arrays/objects (inner array that contains vertices with edges to the node at the index, or an object with key as the current node and values as the connected nodes)
// o(1) for adding vertex/edge, o(e) for removing edge, o(v + e) for removing vertex, querying, storage
// takes up less space in sparse graphs, faster to iterate over all edges
// can be slower to lookup specific edge



