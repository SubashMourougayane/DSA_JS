// Implement Linear Search Algorithms that search a provided Array for the provided value.
// The Linear Search Algorithms will either return a boolean, index, or value back.

// const foods = ["pizza", "orange", "yogurt"];
// linearSearchIndexOf(foods, "pizza") --> 0
// linearSearchIncludes(foods, "pizza") --> true
// linearSearchFind(foods, food => food === "pizza") --> "pizza"

function linearSearchIndexOf(arr, val) {}

function linearSearchIncludes(arr, val) {}

function linearSearchFind(arr, cb) {}

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

const foods = ["pizza", "orange", "yogurt"];
const people = [{ name: "Kevin", last: "Nguyen", born: 1995 }];

describe("linearSearchIndexOf()", () => {
  it("returns index of found item", () => {
    assert.equal(linearSearchIndexOf(foods, "pizza"), 0);
    assert.equal(linearSearchIndexOf(foods, "yogurt"), 2);
  });
  it("returns -1 if item not found", () => {
    assert.equal(linearSearchIndexOf(foods, "laptop"), -1);
  });
});

describe.skip("linearSearchIncludes()", () => {
  it("returns true if item found", () => {
    assert.equal(linearSearchIncludes(foods, "pizza"), true);
  });
  it("returns false if item NOT found", () => {
    assert.equal(linearSearchIncludes(foods, "laptop"), false);
  });
});

describe.skip("linearSearchFind()", () => {
  it("returns item back if found", () => {
    const kevin = people[0];
    assert.equal(
      linearSearchFind(people, person => person.name === "Kevin"),
      kevin
    );
  });
  it("returns undefined if item NOT found", () => {
    assert.equal(
      linearSearchFind(people, person => person.name === "Kevinn"),
      undefined
    );
  });
});

mocha.run();
