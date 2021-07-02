import Graph from '../data-structures/graph/Graph.js';

const graph = new Graph();

graph.addNode(1);
graph.addNode(2);
graph.addLine(1, 2);

console.log(graph);
console.log(graph.find(1).lines[0]);
