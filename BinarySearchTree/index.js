class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
}

// _________ _______  _______ _________   _______  _______  _______  _______  _______
// \__   __/(  ____ \(  ____ \\__   __/  (  ____ \(  ___  )(  ____ \(  ____ \(  ____ \
//    ) (   | (    \/| (    \/   ) (     | (    \/| (   ) || (    \/| (    \/| (    \/
//    | |   | (__    | (_____    | |     | |      | (___) || (_____ | (__    | (_____
//    | |   |  __)   (_____  )   | |     | |      |  ___  |(_____  )|  __)   (_____  )
//    | |   | (            ) |   | |     | |      | (   ) |      ) || (            ) |
//    | |   | (____/\/\____) |   | |     | (____/\| )   ( |/\____) || (____/\/\____) |
//    )_(   (_______/\_______)   )_(     (_______/|/     \|\_______)(_______/\_______)
//                             ____       _
//                             |  _ \     | |
//                             | |_) | ___| | _____      __
//                             |  _ < / _ \ |/ _ \ \ /\ / /
//                             | |_) |  __/ | (_) \ V  V /
//                             |____/ \___|_|\___/ \_/\_/

mocha.setup("bdd");
const { assert } = chai;

describe("insert()", () => {
  it("Sets root of BST if BST has no root.", () => {
    const BST = new BinarySearchTree();
    BST.insert(10);
    BST.insert(1);
    assert.equal(BST.root.value, 10);
    //          10
    //        /   \
    //       ?     ?
  });
  it("Does not insert if value is equal to another value in BST.", () => {
    const BST = new BinarySearchTree();
    BST.insert(10);
    BST.insert(10);

    assert.isNotOk(BST.root.left);
    assert.isNotOk(BST.root.right);
  });
  it("Inserts correctly.", () => {
    const BST = new BinarySearchTree();
    BST.insert(8);
    BST.insert(3);
    BST.insert(10);
    BST.insert(1);
    BST.insert(6);
    BST.insert(14);
    //          8
    //        /   \
    //       3     10
    //      / \      \
    //     1   6     14

    assert.equal(BST.root.left.value, 3);
    assert.equal(BST.root.left.left.value, 1);
    assert.equal(BST.root.left.right.value, 6);

    assert.equal(BST.root.right.value, 10);
    assert.equal(BST.root.right.right.value, 14);
  });
});

describe("find()", () => {
  it("returns node with the same data.", () => {
    const BST = new BinarySearchTree();
    BST.insert(8);
    BST.insert(3);
    BST.insert(10);
    BST.insert(1);
    BST.insert(6);
    BST.insert(14);
    //          8
    //        /   \
    //       3     10
    //      / \      \
    //     1   6     14

    const six = BST.root.left.right;
    assert.deepEqual(BST.find(6), six);
  });
  it("returns falsy value if value not found.", () => {
    const BST = new BinarySearchTree();
    assert.isNotOk(BST.find(9999));
    BST.insert(8);
    BST.insert(3);
    BST.insert(10);
    BST.insert(1);
    BST.insert(6);
    BST.insert(14);
    //          8
    //        /   \
    //       3     10
    //      / \      \
    //     1   6     14
    assert.isNotOk(BST.find(9999));
  });
});

describe("BFS()", () => {
  it("Works on empty tree.", () => {
    const BST = new BinarySearchTree();
    assert.deepEqual(BST.BFS(), []);
  });
  it("can traverse BF.", () => {
    const BST = new BinarySearchTree();
    BST.insert(8);
    BST.insert(3);
    BST.insert(10);
    BST.insert(1);
    BST.insert(6);
    BST.insert(14);
    const res = BST.BFS();
    //          8
    //        /   \
    //       3     10
    //      / \      \
    //     1   6     14

    assert.deepEqual(res.map(node => node.value), [8, 3, 10, 1, 6, 14]);
  });
});

describe("DFS()", () => {
  it("Works on empty tree.", () => {
    const BST = new BinarySearchTree();
    assert.deepEqual(BST.DFS(), []);
  });
  it("can traverse DF.", () => {
    const BST = new BinarySearchTree();
    BST.insert(8);
    BST.insert(3);
    BST.insert(10);
    BST.insert(1);
    BST.insert(6);
    BST.insert(14);
    const res = BST.DFS();
    //          8
    //        /   \
    //       3     10
    //      / \      \
    //     1   6     14

    assert.deepEqual(res.map(node => node.value), [8, 3, 1, 6, 10, 14]);
  });
});

mocha.run();
