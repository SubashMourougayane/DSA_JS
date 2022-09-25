// Implement a Priority Queue, using a Min Binary Heap
// For bubbleUp you can find parent index by doing Math.floor((idx - 1) / 2);
// For sinkDown you can find child indexes with (idx * 2 + 1) (idx * 2 + 2)
// Hint: You can copy most of the code from our Max Binary Heap Implementation
class Node {}

class PriorityQueue {}

mocha.setup("bdd");
const { assert } = chai;

describe("Node", () => {
  it("is created with 'val' and 'priority' properties", () => {
    let patient454 = new Node("Heart Attack", 1);
    let patient455 = new Node("Fever", 40);

    assert.equal(patient454.val, "Heart Attack");
    assert.equal(patient455.priority, 40);
  });
});

describe("Enqueue", () => {
  it("takes in val and priority, pushes Node into the Priority Queue", () => {
    let emergencyRoom = new PriorityQueue();
    emergencyRoom.enqueue("glass in foot", 3);
    assert.equal(emergencyRoom.values[0].val, "glass in foot");
  });
  it("correctly puts higher priority Nodes at top/front of Priority Queue", () => {
    let emergencyRoom = new PriorityQueue();
    emergencyRoom.enqueue("common cold", 5);
    emergencyRoom.enqueue("gunshot wound", 1);
    emergencyRoom.enqueue("high fever", 4);
    emergencyRoom.enqueue("broken arm", 2);
    emergencyRoom.enqueue("glass in foot", 3);
    assert.equal(emergencyRoom.values[0].val, "gunshot wound");
  });
});

describe("Dequeue", () => {
  it("returns the dequeued Node", () => {
    let emergencyRoom = new PriorityQueue();
    emergencyRoom.enqueue("common cold", 5);
    assert.equal(emergencyRoom.dequeue().val, "common cold");
  });
  it("correctly reorganizes Priority Queue", () => {
    let emergencyRoom = new PriorityQueue();
    emergencyRoom.enqueue("heart attack", 9);
    emergencyRoom.enqueue("stomach cramp", 11);
    emergencyRoom.enqueue("migraine", 14);
    emergencyRoom.enqueue("fever", 18);
    emergencyRoom.enqueue("back pain", 19);
    emergencyRoom.enqueue("gunshot wound", 5);
    emergencyRoom.enqueue("coughing", 21);
    emergencyRoom.enqueue("headache", 33);
    emergencyRoom.enqueue("food poisoning", 17);
    emergencyRoom.enqueue("sore throat", 27);

    assert.equal(emergencyRoom.dequeue().val, "gunshot wound");

    assert.deepEqual(emergencyRoom.values.map(node => node.val), [
      "heart attack",
      "stomach cramp",
      "migraine",
      "food poisoning",
      "back pain",
      "sore throat",
      "coughing",
      "headache",
      "fever"
    ]);

    let emergencyRoom2 = new PriorityQueue();
    emergencyRoom2.enqueue("gunshot wound", 5);
    emergencyRoom2.enqueue("stomach cramp", 11);
    emergencyRoom2.enqueue("heart attack", 9);
    emergencyRoom2.enqueue("migraine", 14);
    emergencyRoom2.enqueue("fever", 18);
    emergencyRoom2.enqueue("back pain", 19);
    emergencyRoom2.enqueue("headache", 33);
    emergencyRoom2.enqueue("coughing", 21);
    emergencyRoom2.enqueue("sore throat", 27);
    emergencyRoom2.enqueue("food poisoning", 17);

    emergencyRoom2.dequeue();
    assert.deepEqual(emergencyRoom2.values.map(node => node.val), [
      "heart attack",
      "stomach cramp",
      "fever",
      "migraine",
      "food poisoning",
      "back pain",
      "headache",
      "coughing",
      "sore throat"
    ]);
  });
});

mocha.run();
