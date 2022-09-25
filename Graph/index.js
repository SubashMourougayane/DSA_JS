class Graph {
  constructor() {
    this.adjacencyList = {};
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
//                         ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

//                          ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

//                          ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

mocha.setup("bdd");
const { assert } = chai;

describe("Graph", () => {
  it("addVertex() works and does not overwrite.", () => {
    let g = new Graph();
    g.addVertex("Tokyo");
    assert.deepEqual(g.adjacencyList["Tokyo"], []);
    g.adjacencyList["Tokyo"].push("SOMETHING");
    g.addVertex("Tokyo");
    assert.equal(g.adjacencyList["Tokyo"][0], "SOMETHING");
  });
  it.skip("addEdge() works.", () => {
    let g = new Graph();
    g.addVertex("Tokyo");
    g.addVertex("San Francisco");
    g.addEdge("Tokyo", "San Francisco");
    assert.equal(g.adjacencyList["Tokyo"][0], "San Francisco");
    assert.equal(g.adjacencyList["San Francisco"][0], "Tokyo");
  });
  it.skip("removeEdge() works.", () => {
    let g = new Graph();
    g.addVertex("Tokyo");
    g.addVertex("San Francisco");
    g.addEdge("Tokyo", "San Francisco");
    assert.equal(g.adjacencyList["Tokyo"][0], "San Francisco");
    g.removeEdge("San Francisco", "Tokyo");
    assert.isNotOk(g.adjacencyList["Tokyo"][0]);
    assert.equal(g.adjacencyList["San Francisco"].length, 0);
  });
  it.skip("removeVertex() works.", () => {
    let g = new Graph();
    g.addVertex("Tokyo");
    g.addVertex("San Francisco");
    g.addEdge("Tokyo", "San Francisco");
    g.removeVertex("San Francisco");
    assert.isNotOk(g.adjacencyList["Tokyo"][0]);
    assert.isNotOk(g.adjacencyList["San Francisco"]);
  });
  it.skip("depthFirst works.", () => {
    let g = new Graph();

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
    //          A
    //        /   \
    //       B     C
    //       |     |
    //       D --- E
    //        \   /
    //          F
    assert.deepEqual(g.depthFirstIterative("A"), [
      "A",
      "C",
      "E",
      "F",
      "D",
      "B"
    ]);
  });
  it.skip("breadthFirst works.", () => {
    let g = new Graph();

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
    //          A
    //        /   \
    //       B     C
    //       |     |
    //       D --- E
    //        \   /
    //          F
    assert.deepEqual(g.breadthFirst("A"), ["A", "B", "C", "D", "E", "F"]);
  });
});

mocha.run();
