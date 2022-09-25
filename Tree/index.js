class TreeNode {
  constructor() {}
}

class Tree {
  constructor() {}
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
//                         ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

//                          ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

//                          ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

mocha.setup("bdd");
const { assert } = chai;

describe("TreeNode", () => {
  it("has valid data and children property", () => {
    const treeNode = new TreeNode("a");
    assert.equal(treeNode.data, "a");
    assert.equal(treeNode.children.length, 0);
    assert.equal(Array.isArray(treeNode.children), true);
  });
  it("can add children", () => {
    const treeNode = new TreeNode("a");
    treeNode.insert("b");
    assert.equal(treeNode.children.length, 1);
    assert.equal(treeNode.children[0].data, "b");
    assert.deepEqual(treeNode.children[0].children, []);
  });
  it("can remove children", () => {
    const treeNode = new TreeNode("a");
    treeNode.insert("b");
    assert.equal(treeNode.children.length, 1);
    treeNode.remove("c");
    assert.equal(treeNode.children.length, 1);
    treeNode.remove("b");
    assert.equal(treeNode.children.length, 0);
  });
});

describe("Tree", () => {
  it("has root property that is set to TreeNode passed to constructor, otherwise defaults to null", () => {
    const t = new Tree();
    assert.equal(t.root, null);

    const t2 = new Tree(new TreeNode("a"));
    assert.equal(t2.root.data, "a");
  });
  it("BFS works by returning Nodes after CB function is called on them", () => {
    const t = new Tree(new TreeNode("general tso"));
    t.root.insert("sgt dave");
    t.root.insert("sgt joe");
    t.root.insert("sgt dan");
    t.root.children[0].insert("pvt johnson");
    //                 "general tso"
    //               /       |       \
    //         "sgt dave"  "sgt joe" "sgt dan"
    //             /
    //     "pvt johnson"

    const descendingRanksCapitalized = t.BFS(node => {
      node.data = node.data.toUpperCase();
    });

    assert.deepEqual(
      descendingRanksCapitalized.map(treeNode => treeNode.data),
      ["GENERAL TSO", "SGT DAVE", "SGT JOE", "SGT DAN", "PVT JOHNSON"]
    );
  });
  it("BFS works on empty tree", () => {
    const t = new Tree();
    assert.deepEqual(t.BFS(() => {}), []);
  });
  it("DFS works by returning Nodes after CB function is called on them", () => {
    const t = new Tree(new TreeNode("a"));
    t.root.insert("b");
    t.root.insert("d");
    t.root.children[0].insert("c");
    t.root.children[1].insert("e");
    //                 "a"
    //               /    \
    //             "b"    "d"
    //             /        \
    //           "c"        "e"

    const resultString = t
      .DFS(() => {})
      .map(node => node.data)
      .join("");

    assert.equal(resultString === "abcde" || resultString === "adebc", true);
  });
  it("DFS works on empty tree", () => {
    const t = new Tree();
    assert.deepEqual(t.DFS(() => {}), []);
  });
  it("levelWidth works", () => {
    const t = new Tree(new TreeNode("general tso"));
    t.root.insert("sgt dave");
    t.root.insert("sgt joe");
    t.root.insert("sgt dan");
    t.root.children[0].insert("pvt johnson");
    t.root.children[2].insert("pvt mike");
    //                 "general tso"
    //               /       |       \
    //         "sgt dave"  "sgt joe" "sgt dan"
    //             /                   \
    //     "pvt johnson"              "pvt mike"

    assert.deepEqual(t.levelWidth(), [1, 3, 2]);
  });
  it("levelWidth works on empty tree", () => {
    const t = new Tree();
    assert.deepEqual(t.levelWidth(), [0]);
  });
});

mocha.run();
