class HashTable {
  constructor(size) {
    this.keyMap = new Array(size);
  }

  hash(key) {
    let total = 0;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      total = total + key.charCodeAt(i);
    }
    return total % this.keyMap.length;
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

const createColorsHT = () => {
  let ht = new HashTable(17);
  ht.set("red", "#ff0000");
  ht.set("orange", "#ffa500 ");
  ht.set("yellow", "#ffff00");
  ht.set("green", "#00ff00");
  ht.set("blue", "#0000ff");
  ht.set("indigo", "#4b0082");
  ht.set("violet", "#800080");
  return ht;
};

describe("set()", () => {
  it("sets new key value pairs and uses seperate-chaining to avoid collisions.", () => {
    const ht = createColorsHT();
    assert.isNotOk(ht.keyMap[1]);
    assert.deepEqual(ht.keyMap[5], [
      ["yellow", "#ffff00"],
      ["indigo", "#4b0082"]
    ]);
    assert.deepEqual(ht.keyMap[16], [["blue", "#0000ff"]]);
  });
  it("updates value for key, if key already exists.", () => {
    const ht = createColorsHT();
    assert.deepEqual(ht.keyMap[16], [["blue", "#0000ff"]]);
    ht.set("blue", "meow");
    assert.deepEqual(ht.keyMap[16], [["blue", "meow"]]);
    ht.set("blue", "#0000ff");
    assert.deepEqual(ht.keyMap[16], [["blue", "#0000ff"]]);
  });
});

describe.skip("get()", () => {
  it("returns value of key, or undefined if key does not yet exist.", () => {
    const ht = createColorsHT();
    assert.equal(ht.get("blue"), "#0000ff");
    assert.equal(ht.get("blueeee"), undefined);
  });
});

describe.skip("keys() / values()", () => {
  it("keys() returns an array of key values.", () => {
    const ht = createColorsHT();
    assert.deepEqual(ht.keys(), [
      "green",
      "yellow",
      "indigo",
      "orange",
      "red",
      "violet",
      "blue"
    ]);
  });
  it("values() returns an array of values.", () => {
    const ht = createColorsHT();
    assert.deepEqual(ht.values(), [
      "#00ff00",
      "#ffff00",
      "#4b0082",
      "#ffa500 ",
      "#ff0000",
      "#800080",
      "#0000ff"
    ]);
  });
});

mocha.run();
