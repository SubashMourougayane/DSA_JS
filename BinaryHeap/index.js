// This will be a Max Binary Heap
// For bubbleUp you can find parent index by doing Math.floor((idx - 1) / 2);
// For sinkDown you can find child indexes with (idx * 2 + 1) (idx * 2 + 2)
// Extra hint have insert and extractMax call bubbleUp and sinkDown respectively
class BinaryHeap {
  constructor() {
    this.values = [];
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

describe("swap()", () => {
  it("switches values in an array when provided with 2 indexes.", () => {
    const BH = new BinaryHeap();
    const arr = [13, 2, 4];
    BH.swap(arr, 0, 1);
    assert.deepEqual(arr, [2, 13, 4]);
  });
});

describe("insert()", () => {
  it("Works. Hint use a bubbleup helper method in same class.", () => {
    const BH = new BinaryHeap();
    BH.insert(100);
    BH.insert(19);
    BH.insert(36);
    BH.insert(17);
    BH.insert(3);
    BH.insert(25);
    BH.insert(1);
    //         100
    //        /   \
    //      19      36
    //     / \     /  \
    //    17  3   25   1
    assert.deepEqual(BH.values, [100, 19, 36, 17, 3, 25, 1]);

    BH.insert(200);
    assert.deepEqual(BH.values, [200, 100, 36, 19, 3, 25, 1, 17]);
  });
});

describe("extractMax()", () => {
  it("returns max value.", () => {
    const BH = new BinaryHeap();
    BH.insert(36);
    BH.insert(19);
    BH.insert(100);
    assert.equal(BH.extractMax(), 100);
  });
  it("correctly sets tree after extracting max.", () => {
    const BH = new BinaryHeap();
    BH.insert(100);
    BH.insert(36);
    BH.insert(19);
    BH.insert(3);
    BH.insert(17);
    BH.insert(25);
    BH.insert(1);
    //         100
    //        /   \
    //      36      19
    //     / \     /  \
    //    3   17   25   1

    assert.equal(BH.extractMax(), 100);
    assert.deepEqual(BH.values, [36, 17, 25, 3, 1, 19]);
    //         36
    //        /   \
    //      17     25
    //     / \     /  \
    //    3   1   19

    BH.extractMax();
    assert.deepEqual(BH.values, [25, 17, 19, 3, 1]);
    BH.extractMax();
    assert.deepEqual(BH.values, [19, 17, 1, 3]);
    BH.extractMax();
    assert.deepEqual(BH.values, [17, 3, 1]);
    BH.extractMax();
    assert.deepEqual(BH.values, [3, 1]);
    BH.extractMax();
    assert.deepEqual(BH.values, [1]);
  });
  it("correctly sets tree after extracting max on tree with only ONE node.", () => {
    const BH = new BinaryHeap();
    BH.insert(100);
    assert.equal(BH.extractMax(), 100);
    assert.deepEqual(BH.values, []);
  });
});

mocha.run();
