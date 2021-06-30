import Tree from '../data-structures/tree/Tree.js';

const tree = new Tree();

tree.add(1);
tree.add(2, 1);
tree.add(3, 4);

console.log(tree.toArray());

console.log(tree);
