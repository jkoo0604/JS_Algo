// shortest path
class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList.hasOwnProperty(vertex)) this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2, weight) { 
        if (!this.adjacencyList.hasOwnProperty(vertex1)) this.adjacencyList[vertex1] = [vertex2];
        else {
            if (!this.adjacencyList[vertex1].includes(vertex2)) this.adjacencyList[vertex1].push({node: vertex2, weight});
        } 
        if (!this.adjacencyList.hasOwnProperty(vertex2)) this.adjacencyList[vertex2] = [vertex1];
        else  {
            if (!this.adjacencyList[vertex2].includes(vertex1)) this.adjacencyList[vertex2].push({node: vertex1, weight});
        }
    }


    // Dijkstra's Algorithm
    // pick the node with the smallest known distance to visit first
    // look at each of its neighbors
    // for each neighboring node, calculate distance by summing total edges that lead to the node we're checking from the starting node
    // if new total distance to node is less than previous total, store the new shorter distane for the node

    // start with infinity for all distances except distance from node to iself (0)
    // pick the smallest (itself)
    // add to list of visited nodes
    // look at its neighbors
    // update the distance from infinity to the actual distance to the neighbor
    // previous object: {neighboring node: current}
    // pick the lowest of the neighbors (make it the new current)

    shortestPath(start, end) {
        var distances = {};        
        var q = new PriorityQueue();
        var previous = {};
        var path = [];
        for (let key in this.adjacencyList) {
            if (key === start) {
                distances[key] = 0;
                q.enqueue(key, 0);
            } else {
                distances[key] = Infinity;
                q.enqueue(key, Infinity);
            };
            previous[key] = null;
        };
        var current;
        var neighbors;
        var distance;
        while (q.values.length) {
            current = q.dequeue().val;
            if (current === end) break;
            if (current || distances[current] !== Infinity) {
                neighbors = this.adjacencyList[current];
                neighbors.forEach(neighbor => {
                    distance = distances[current] + neighbor.weight;
                    if (distance < distances[neighbor.node]) {
                        distances[neighbor.node] = distance;
                        previous[neighbor.node] = current;
                        q.enqueue(neighbor.node, distance);
                    }
                })
            }
        }
        let pathNode = end;
        while (pathNode) {
            path.push(pathNode);
            pathNode = previous[pathNode];
        }
        // console.log(previous);
        return path.reverse();
    }
}


// class PriorityQueue {
//     constructor() {
//         this.values = [];
//     };

//     enqueue(val, priority) {
//         this.values.push({val, priority});
//         this.sort();
//     };

//     dequeue() {
//         return this.values.shift();
//     };

//     sort() {
//         this.values.sort((a,b) => a.priority - b.priority);
//     };
// }

class PriorityNode {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue { // MinBinaryHeap: low priority value is handled first
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        var newNode = new PriorityNode(val, priority);
        this.values.push(newNode);
        // console.log(this.values);
        if (this.values.length === 1) return this;
        var newIdx = this.values.length-1;
        var parentIdx = Math.floor((newIdx-1)/2);
        var element = this.values[newIdx];
        var parent = this.values[parentIdx];
        // console.log(parentNode.priority);
        while (parent && parent.priority > element.priority) {
            this.values[newIdx] = this.values[parentIdx];
            this.values[parentIdx] = newNode;
            newIdx = parentIdx;
            parentIdx = Math.floor((newIdx-1)/2);
            element = this.values[newIdx];
            parent = this.values[parentIdx];
        }
        return this;
    }

    dequeue() {
        if (this.values.length === 0) return null;
        var removed = this.values[0];
        this.values[0] = this.values[this.values.length-1];
        this.values.pop();
        if (this.values.length === 0) return removed;
        var idx = 0;
        var childLeft = (2 * idx) + 1;
        var childRight = (2 * idx) + 2;
        while (childLeft < this.values.length) {
            var temp = this.values[idx];
            var changeIdx;
            if (childRight < this.values.length) {
                changeIdx = this.values[childLeft].priority < this.values[childRight].priority ? childLeft : childRight;
            } else {
                changeIdx = childLeft;
            }
            if (this.values[idx].priority > this.values[changeIdx].priority) {
                this.values[idx] = this.values[changeIdx];
                this.values[changeIdx] = temp;
                idx = changeIdx;
                childLeft = (2 * idx) + 1;
                childRight = (2 * idx) + 2;
            } else break;
        }
        // console.log(this.values);
        return removed;
    }
}

var graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "F", 1);
graph.addEdge("D", "E", 3);
graph.addEdge("E", "F", 1);
graph.addEdge("B", "E", 3);
console.log(graph.adjacencyList);
console.log(graph.shortestPath("A","E"));
console.log(graph.shortestPath("A","A"));
console.log(graph.shortestPath("A","D"));