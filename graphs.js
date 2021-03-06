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

// using adjacency list for this


// undirected graph
class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(name) {
        if (!this.adjacencyList.hasOwnProperty(name)) this.adjacencyList[name] = [];
    }

    addEdge(vertex1, vertex2) { // in a directed graph, order of arguments matters - push v1 to v2 or v2 to v1, not both
        if (!this.adjacencyList.hasOwnProperty(vertex1)) this.adjacencyList[vertex1] = [vertex2];
        else {
            if (!this.adjacencyList[vertex1].includes(vertex2)) this.adjacencyList[vertex1].push(vertex2);
        } 
        if (!this.adjacencyList.hasOwnProperty(vertex2)) this.adjacencyList[vertex2] = [vertex1];
        else  {
            if (!this.adjacencyList[vertex2].includes(vertex1)) this.adjacencyList[vertex2].push(vertex1);
        }
    }

    removeEdge(vertex1, vertex2) {
        if (this.adjacencyList.hasOwnProperty(vertex1) && this.adjacencyList[vertex1].includes(vertex2)) {
            // console.log('removing vertex2 from vertex2');
            let newV1 = this.adjacencyList[vertex1].filter(item => item !== vertex2)
            this.adjacencyList[vertex1] = newV1;
        }
        if (this.adjacencyList.hasOwnProperty(vertex2) && this.adjacencyList[vertex2].includes(vertex1)) {
            // console.log('removing vertex1 from vertex1');
            let newV2 = this.adjacencyList[vertex2].filter(item => item !== vertex1)
            this.adjacencyList[vertex2] = newV2;
        }

    }

    removeVertex(vertex) {
        if (this.adjacencyList.hasOwnProperty(vertex)) {           
            while (this.adjacencyList[vertex].length) {
                this.removeEdge(vertex, this.adjacencyList[vertex][0]);
            }
            delete this.adjacencyList[vertex];
        }
    }
    removeVertex2(vertex) {
        if (this.adjacencyList.hasOwnProperty(vertex)) {           
            for (let v in this.adjacencyList) {
                this.removeEdge(v, vertex);
            }
            delete this.adjacencyList[vertex];
        }
    }
    removeVertex3(vertex) {
        if (this.adjacencyList.hasOwnProperty(vertex)) {
            delete this.adjacencyList[vertex];
            for (let v in this.adjacencyList) {
                if (this.adjacencyList[v].includes(vertex)) {
                    this.adjacencyList[v] = this.adjacencyList[v].filter(item => item !== vertex);
                }
            }
        }
    }
}


var graph = new Graph();
graph.addVertex('Tokyo');
graph.addVertex('San Francisco');
graph.addVertex('Dallas');
graph.addVertex('Aspen');
console.log(graph);
graph.addEdge('Tokyo', 'Aspen');
console.log(graph.adjacencyList);
graph.addEdge('Aspen', 'Tokyo');
graph.addEdge('San Francisco', 'Los Angeles');
graph.addEdge('San Francisco', 'Tokyo');
graph.addEdge('San Francisco', 'Dallas');
graph.addEdge('San Francisco', 'Aspen');
graph.addEdge('Dallas', 'Aspen');
graph.addEdge('Dallas', 'Tokyo');
console.log(graph.adjacencyList);
graph.removeEdge('Tokyo', 'Los Angeles');
graph.removeEdge('Tokyo', 'Aspen');
console.log(graph.adjacencyList);
graph.removeVertex('San Francisco');
console.log(graph.adjacencyList);
