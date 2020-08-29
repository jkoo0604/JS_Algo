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

    // depth first traversal
    // unlike trees (one specific type of graph), there is no root node or direction
    // choose one node ('root'), go to its neighbor and its neighbor (instead of going to a sibling of the first neighbor)
    // track the nodes visited

    // DFS recursive
    dfsRecursive(start) {
        var visited = {};
        var vertices = [];
        var adjacencyList = this.adjacencyList;
        function dfs(vertex) {
            if (!vertex || !adjacencyList.hasOwnProperty(vertex)) return;
            visited[vertex] = true;
            vertices.push(vertex);
            for (let i=0; i<adjacencyList[vertex].length; i++) {
                if (!visited[adjacencyList[vertex][i]]) dfs(adjacencyList[vertex][i]);
            }
        };
        dfs(start);
        // console.log(visited);
        return vertices;
    }
    dfsRecursive2(start) {
        var visited = {};
        var vertices = [];
        var adjacencyList = this.adjacencyList;
        function dfs(vertex) {
            if (!vertex) return null;
            visited[vertex] = true;
            vertices.push(vertex);
            adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) return dfs(neighbor);
            })
        };
        dfs(start);
        // console.log(visited);
        return vertices;
    }

    dfsIterative(start) {
        var visited = {};
        var stack = [];
        var vertices = [];
        var adjacencyList = this.adjacencyList;
        stack.push(start);
        while (stack.length !== 0) {
            let current = stack.pop();
            if (!visited[current]) {
                visited[current] = true;
                vertices.push(current);
                for (let i=0; i<adjacencyList[current].length; i++) {
                    stack.push(adjacencyList[current][i]);
                }
            }
        }
        // console.log(visited);
        // console.log(stack);
        return vertices;       
    }
    // breadth first traversal
    bfs(start) {
        var queue = [start];
        var vertices = [];
        var visited = {};
        var current;
        visited[start] = true;
        while (queue.length) {
            current = queue.shift();
            vertices.push(current);
            this.adjacencyList[current].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }
        return vertices;
    }

}

var g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");
console.log(g.adjacencyList);
console.log(g.dfsRecursive2("A"));
console.log(g.dfsIterative("A"));
console.log(g.bfs("A"));